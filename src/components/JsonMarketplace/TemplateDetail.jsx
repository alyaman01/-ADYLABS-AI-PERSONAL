import React, { useState, useEffect } from "react";
import { ReactFlow, Background, Controls, Handle, Position } from "@xyflow/react";
import { useLocation, useNavigate } from "react-router-dom"; 
import "@xyflow/react/dist/style.css"; 
import "./TemplateDetail.css";

/* ================= TARGET ASSETS IMPORTS ================= */
import ProfileImg from "../../assets/marketplace/yashpic.svg";
import VerifyIcon from "../../assets/marketplace/verifyed.png";
import CopyIcon from "../../assets/marketplace/copy.svg";
import DownloadIcon from "../../assets/marketplace/download.svg";

// SUB COMPONENTS IMPORTS
import TemplateInfo from "./TemplateInfo";
import RelatedTemplates from "./RelatedTemplates";
import BonusSection from "./BonusSection";
import PricingBonusTable from "../PricingBonusTable";
import WhyChooseUs from "../WhyChooseUs";
import WorkingProcess from "../WorkingProcess";
import TestimonialSlider from "../TestimonialSlider";
import FaqSection from "../FaqSection";
import ContactEnquiry from "../ContactEnquiry";
import LetsTalkCTA from "../LetsTalkCTA";

// POPUP CARD COMPONENT
import GetInTouchModal from "../GetInTouchModal"; 

/* ================= GITHUB ICON EXTRACTOR UTILITY ================= */
const getN8nIconUrl = (nodeType) => {
  if (!nodeType) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Webhook/webhook.svg";
  let cleanName = nodeType.split('.').pop();
  
  if (cleanName.toLowerCase().includes("telegram")) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Telegram/telegram.svg";
  if (cleanName.toLowerCase().includes("sheet")) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Google/Sheets/googleSheets.svg";
  if (cleanName.toLowerCase().includes("openai") || cleanName.toLowerCase().includes("agent")) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/OpenAi/openAi.svg";
  if (cleanName.toLowerCase().includes("calendar")) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Google/Calendar/googleCalendar.svg";
  if (cleanName.toLowerCase().includes("drive")) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Google/Drive/googleDrive.svg";
  if (cleanName.toLowerCase().includes("slack")) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Slack/slack.svg";

  return `https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/${cleanName}/${cleanName}.svg`;
};

/* ================= CUSTOM REACTFLOW NODES ================= */
const N8nHubNode = ({ data }) => {
  return (
    <div className={`n8n-hub-card ${data.isTrigger ? 'trigger-border' : ''}`} style={{ position: 'relative', overflow: 'visible' }}>
      <Handle 
        type="target" 
        position={Position.Left} 
        id="target-l"
        style={{ background: '#f59e0b', width: '12px', height: '12px', borderRadius: '50%', left: '-6px', top: '50%', transform: 'translateY(-50%)', zIndex: 999 }} 
      />
      {data.metrics && <div className="node-metrics-badge">{data.metrics}</div>}
      {data.status && (
        <div className={`node-status-dot ${data.status.toLowerCase()}`}>
          <span className="dot"></span> {data.status}
        </div>
      )}
      <div className="hub-node-body">
        <div className="hub-node-icon-box">
          <img 
            src={data.iconUrl} 
            alt={data.label} 
            onError={(e) => { e.target.src = "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Webhook/webhook.svg"; }}
          />
        </div>
        <div className="hub-node-details">
          <div className="hub-node-title">{data.label}</div>
          <div className="hub-node-subtitle">{data.subtitle}</div>
        </div>
      </div>
      <Handle 
        type="source" 
        position={Position.Right} 
        id="source-r"
        style={{ background: '#f59e0b', width: '12px', height: '12px', borderRadius: '50%', right: '-6px', top: '50%', transform: 'translateY(-50%)', zIndex: 999 }} 
      />
    </div>
  );
};

const N8nAiAgentNode = ({ data }) => {
  return (
    <div className="n8n-hub-ai-agent-card" style={{ position: 'relative', overflow: 'visible' }}>
      <Handle 
        type="target" 
        position={Position.Left} 
        id="target-l"
        style={{ background: '#f59e0b', width: '12px', height: '12px', borderRadius: '50%', left: '-6px', top: '50%', transform: 'translateY(-50%)', zIndex: 999 }} 
      />
      <div className="node-status-dot active"><span className="dot"></span> Active</div>
      <div className="agent-tps-badge">{data.metrics || "12.1k/min TPS"}</div>
      <div className="agent-node-icon">
        <img src="https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/OpenAi/openAi.svg" alt="AI" />
      </div>
      <div className="agent-title">{data.label || "AI Agent (GPT-4)"}</div>
      <div className="agent-tools-box">
        <div className="tools-heading">Tools:</div>
        <div className="tools-pills-row">
          <span>Google</span>
          <span>Calendar</span>
          <span>Telegram API</span>
        </div>
      </div>
      <Handle 
        type="source" 
        position={Position.Right} 
        id="source-r"
        style={{ background: '#f59e0b', width: '12px', height: '12px', borderRadius: '50%', right: '-6px', top: '50%', transform: 'translateY(-50%)', zIndex: 999 }} 
      />
    </div>
  );
};

const nodeTypes = {
  hubNode: N8nHubNode,
  aiAgentNode: N8nAiAgentNode
};

function TemplateDetail({ filename, onBack }) {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const initialFile = location.state?.selectedFile || filename;

  const [currentFile, setCurrentFile] = useState(initialFile);
  const [allTemplates, setAllTemplates] = useState([]); 
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topBadges, setTopBadges] = useState([]);

  // 🎯 Raw JSON structural storage for copy/download triggers
  const [rawWorkflowJson, setRawWorkflowJson] = useState(null);

  const [templateTitle, setTemplateTitle] = useState("Loading Template...");
  const [templateDesc, setTemplateDesc] = useState("Fetching template details...");

  const [isVerified, setIsVerified] = useState(false); 
  const [showModal, setShowModal] = useState(false);   
  const [pendingAction, setPendingAction] = useState(null); 
  const [isModalForced, setIsModalForced] = useState(false); 

  // ✋ Pan mode tracking
  const [isPanMode, setIsPanMode] = useState(false);

  const sharedEdgeStyle = {
    stroke: "#3b82f6", 
    strokeWidth: 3, 
    strokeDasharray: "6,6" 
  };

  useEffect(() => {
    const fetchTemplatesList = async () => {
      try {
        const res = await fetch("https://raw.githubusercontent.com/adymire/automation-json/main/index.json");
        if (res.ok) {
          const list = await res.json();
          setAllTemplates(list);
        } else {
          throw new Error("Repository error");
        }
      } catch (err) {
        setAllTemplates([
          { name: "0001 Telegram Schedule Automation", path: "/templates/0001_Telegram_Schedule_Automation.json" },
          { name: "0002 Manual Totp Automation Trigger", path: "/templates/0002_Manual_Totp_Automation_Trigger.json" },
          { name: "0003 Bitwarden Automate", path: "/templates/0003_Bitwarden_Automate.json" },
          { name: "0004 GoogleSheets Typeform Automation", path: "/templates/0004_GoogleSheets_Typeform_Automation.json" },
          { name: "0015 HTTP Cron Update Webhook", path: "/templates/0015_HTTP_Cron_Update_Webhook.json" }
        ]);
      }
    };
    fetchTemplatesList();
  }, []);

  useEffect(() => {
    if (location.state?.selectedFile) {
      setCurrentFile(location.state.selectedFile);
    } else if (filename) {
      setCurrentFile(filename);
    }
  }, [location.state, filename]);

  useEffect(() => {
    const loadGithubWorkflow = async () => {
      if (!currentFile) return;
      try {
        setLoading(true);
        
        let cleanPath = currentFile;
        if (cleanPath.startsWith('templates/')) {
          cleanPath = '/' + cleanPath;
        } else if (!cleanPath.startsWith('/')) {
          cleanPath = '/' + cleanPath;
        }

        const rawFileName = currentFile.split("/").pop().replace(".json", "");
        const cleanTitle = rawFileName.replace(/^\d+[\s_]*/, "").replace(/_/g, " ");
        setTemplateTitle(cleanTitle);

        const lowerPath = currentFile.toLowerCase();
        if (lowerPath.includes("telegram")) {
          setTemplateDesc("Automate your community management with this seamless Telegram engine. Instantly dispatch smart alerts, manage schedules, and process inbound requests via a reliable webhook flow.");
        } else if (lowerPath.includes("totp")) {
          setTemplateDesc("A secure, manual authentication trigger handling complex TOTP validation loops. Perfect for managing secure logins and time-sensitive verification pipelines inside your active workspace.");
        } else if (lowerPath.includes("bitwarden")) {
          setTemplateDesc("Keep your secure vault data synchronized automatically. This specialized n8n template seamlessly bridges your Bitwarden setup with secure cloud webhooks for rapid updates.");
        } else if (lowerPath.includes("sheet") || lowerPath.includes("typeform")) {
          setTemplateDesc("Accelerate lead capture pipelines by streaming raw Typeform responses straight into Google Sheets. Features smart columns mapping, instant data validation, and multi-row synchronization logic.");
        } else if (lowerPath.includes("cron") || lowerPath.includes("http")) {
          setTemplateDesc("An enterprise scheduling cron system that periodically triggers advanced network updates via secure HTTP webhooks, complete with continuous performance monitoring logs.");
        } else {
          setTemplateDesc(`A production-grade n8n control framework specifically engineered to optimize your ${cleanTitle || "workspace automation"} with live error tracking and complex logic gates.`);
        }

        const repoEndpoint = `https://raw.githubusercontent.com/adymire/automation-json/main${cleanPath}`;
        const res = await fetch(repoEndpoint);
        
        if (!res.ok) {
          generateProFallbackFlow();
          setLoading(false);
          return;
        }

        const data = await res.json();
        setRawWorkflowJson(data); 

        if (data && (data.nodes || Array.isArray(data))) {
          const targetNodes = Array.isArray(data) ? data : data.nodes;
          const uniqueIcons = [];
          
          const mappedNodes = targetNodes.map((node, i) => {
            const dynamicIcon = getN8nIconUrl(node.type);
            if (!uniqueIcons.includes(dynamicIcon) && uniqueIcons.length < 4) {
              uniqueIcons.push(dynamicIcon);
            }

            let flowNodeType = "hubNode";
            if (node.type?.toLowerCase().includes("openai") || node.type?.toLowerCase().includes("agent")) {
              flowNodeType = "aiAgentNode";
            }

            const nodeNameId = node.name ? node.name.trim() : `node_${i}`;

            return {
              id: nodeNameId,
              type: flowNodeType,
              data: { 
                label: nodeNameId, 
                subtitle: node.type ? node.type.split('.').pop() : "n8n Integration",
                iconUrl: dynamicIcon,
                status: i === 0 ? "Live" : i % 3 === 0 ? "Complex" : "Active",
                metrics: i === 1 ? "5.6k/min TPS" : null,
                isTrigger: i === 0
              },
              position: { 
                x: node.position?.x ? node.position.x : (i * 260) + 50, 
                y: node.position?.y ? node.position.y : 180 + (i % 2 === 0 ? 50 : -50) 
              }
            };
          });

          setNodes(mappedNodes);
          setTopBadges(uniqueIcons);
        } else {
          generateProFallbackFlow();
        }

        if (data && data.connections) {
          const mappedEdges = [];
          Object.keys(data.connections).forEach((sourceNode) => {
            const outputs = (data.connections[sourceNode] && data.connections[sourceNode].main) || [];
            outputs.forEach((targetGroup) => {
              targetGroup.forEach((targetObj) => {
                if (targetObj && targetObj.node) {
                  const cleanedSource = sourceNode.trim();
                  const cleanedTarget = targetObj.node.trim();

                  mappedEdges.push({
                    id: `edge_${cleanedSource}_${cleanedTarget}`,
                    source: cleanedSource,
                    target: cleanedTarget,
                    animated: true,
                    style: sharedEdgeStyle,
                  });
                }
              });
            });
          });
          setEdges(mappedEdges);
        } else {
          setEdges([]);
        }

      } catch (err) {
        console.error("Canvas layout error:", err);
        generateProFallbackFlow();
      }
      setLoading(false);
    };

    loadGithubWorkflow();
  }, [currentFile]);

  const generateProFallbackFlow = () => {
    if (!currentFile) return;
    const telegramIcon = "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Telegram/telegram.svg";
    const sheetIcon = "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Google/Sheets/googleSheets.svg";
    const calendarIcon = "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Google/Calendar/googleCalendar.svg";
    const driveIcon = "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Google/Drive/googleDrive.svg";
    const slackIcon = "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Slack/slack.svg";

    const isOdd = currentFile.includes("0001") || currentFile.includes("0003") || currentFile.includes("Telegram");
    
    setTopBadges(isOdd ? [telegramIcon, sheetIcon] : [calendarIcon, driveIcon, slackIcon]);

    const fallbackNodes = isOdd ? [
      { id: "Telegram Alert", type: "hubNode", position: { x: 50, y: 200 }, data: { label: "Telegram Alert", subtitle: "Trigger", iconUrl: telegramIcon, isTrigger: true } },
      { id: "Log to Sheet", type: "hubNode", position: { x: 320, y: 120 }, data: { label: "Log to Sheet", subtitle: "Google Sheets", iconUrl: sheetIcon, status: "Live" } },
      { id: "GPT-4 Smart Parser", type: "aiAgentNode", position: { x: 600, y: 160 }, data: { label: "GPT-4 Smart Parser", metrics: "9.4k/min" } }
    ] : [
      { id: "Schedule Cron", type: "hubNode", position: { x: 40, y: 150 }, data: { label: "Schedule Cron", subtitle: "Interval Trigger", iconUrl: "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Webhook/webhook.svg", isTrigger: true } },
      { id: "Fetch Calendar", type: "hubNode", position: { x: 300, y: 80 }, data: { label: "Fetch Calendar", subtitle: "Google Events", iconUrl: calendarIcon, status: "Active" } },
      { id: "Slack Sync", type: "hubNode", position: { x: 300, y: 260 }, data: { label: "Slack Sync", subtitle: "Notification", iconUrl: slackIcon, status: "Live" } },
      { id: "Backup to Drive", type: "hubNode", position: { x: 580, y: 170 }, data: { label: "Backup to Drive", subtitle: "Google Drive", iconUrl: driveIcon } }
    ];

    const fallbackEdges = isOdd ? [
      { id: "e1", source: "Telegram Alert", target: "Log to Sheet", animated: true, style: sharedEdgeStyle },
      { id: "e2", source: "Log to Sheet", target: "GPT-4 Smart Parser", animated: true, style: sharedEdgeStyle }
    ] : [
      { id: "e3", source: "Schedule Cron", target: "Fetch Calendar", animated: true, style: sharedEdgeStyle },
      { id: "e4", source: "Schedule Cron", target: "Slack Sync", animated: true, style: sharedEdgeStyle },
      { id: "e5", source: "Fetch Calendar", target: "Backup to Drive", animated: true, style: sharedEdgeStyle },
      { id: "e6", source: "Slack Sync", target: "Backup to Drive", animated: true, style: sharedEdgeStyle }
    ];

    setNodes(fallbackNodes);
    setEdges(fallbackEdges);
    setRawWorkflowJson({ nodes: fallbackNodes, connections: fallbackEdges });
  };

  // 🎯 ACTIONS EXECUTION ENGINE
  const executeAction = (actionType) => {
    const finalDataToExport = rawWorkflowJson ? rawWorkflowJson : { nodes, edges };
    const stringifiedData = JSON.stringify(finalDataToExport, null, 2);

    if (actionType === "copy") {
      navigator.clipboard.writeText(stringifiedData)
        .then(() => alert("JSON Code copied successfully to clipboard! 🔥"))
        .catch(() => alert("Failed to copy JSON. Please try again."));
    } else if (actionType === "download") {
      const blob = new Blob([stringifiedData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      
      const fileExportName = currentFile ? currentFile.split("/").pop().replace(".json", "") : "n8n_automation_schema";
      link.download = `${fileExportName}.json`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const handleActionButtonClick = (action) => {
    if (isVerified) {
      executeAction(action);
    } else {
      setPendingAction(action);
      setIsModalForced(true); 
      setShowModal(true);
    }
  };

  const handleFormSubmitSuccess = () => {
    setIsVerified(true);   
    setShowModal(false);   
    if (pendingAction) {
      executeAction(pendingAction); 
      setPendingAction(null);       
    }
  };

  const handleBackClick = onBack ? onBack : () => navigate("/");

  return (
    <div className="template-detail-page">
      <div className="detail-top-colored-bg">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 5%", gap: "20px" }}>
          <div className="back-navigation" onClick={handleBackClick} style={{ margin: 0, cursor: "pointer" }}>
            <span className="arrow-back">←</span>
            <span>Back to Template</span>
          </div>

          <div style={{ textAlign: "right" }}>
            <select 
              value={currentFile || ""} 
              onChange={(e) => setCurrentFile(e.target.value)}
              style={{ padding: "10px 15px", borderRadius: "8px", border: "1px solid #ccc", background: "#fff", minWidth: "260px", fontWeight: "500", color: "#333", cursor: "pointer" }}
            >
              <option value="">-- Select Template --</option>
              {allTemplates.map((t, index) => (
                <option key={index} value={t.path}>
                  {t.name ? t.name.replace(/_/g, " ") : `Template ${index + 1}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="detail-layout-container">
          <div className="detail-left-column">
            <div className="tech-badge-row">
              {topBadges.map((badgeUrl, idx) => (
                <div key={idx} className="detail-badge-box">
                  <img src={badgeUrl} alt="App Icon" onError={(e) => { e.target.src="https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Webhook/webhook.svg"; }} />
                </div>
              ))}
            </div>

            <h1 className="template-main-title" style={{ fontSize: "24px", textTransform: "capitalize", fontWeight: "700" }}>
              {templateTitle}
            </h1>

            <p className="template-description" style={{ fontSize: "15px", lineHeight: "1.6", color: "#949698" }}>
              {templateDesc}
            </p>

            <div className="creator-profile-card">
              <div className="creator-info">
                <img src={ProfileImg} alt="Creator" className="creator-avatar" />
                <span className="creator-name">Yashveer Giri</span>
                <img src={VerifyIcon} alt="Verified" className="verify-icon" style={{ width: '22px', height: '22px' }} />
              </div>
              
              <div className="detail-action-buttons">
                <button className="dt-btn dt-copy" title="Copy Raw Code" onClick={() => handleActionButtonClick("copy")}>
                  <img src={CopyIcon} alt="Copy" />
                </button>
                <button className="dt-btn dt-download" title="Download Schema File" onClick={() => handleActionButtonClick("download")}>
                  <img src={DownloadIcon} alt="Download" />
                </button>
              </div>
            </div>
          </div>

          <div className="detail-right-canvas-panel hub-dark-wrapper">
            <div className="hub-header-bar">
              <div className="hub-header-left">
                <span className="hub-logo-dot">☍</span>
                <span className="hub-brand-name">n8n</span>
              </div>
              <div className="hub-header-center">N8N Central Automation Hub</div>
              <div className="hub-header-right"></div>
            </div>

            <div className="hub-workspace-body">
              <div className="hub-core-canvas-area" style={{ width: "100%", height: "450px", minHeight: "450px", padding: 0, position: "relative", overflow: "visible" }}>
                
                {/* 🎯 PREMIUM CONTROLS FLOATING SIDEBAR (WITH CUSTOM OUTLINED SVGs MATCHING ORIGINAL SHAPES) */}
                <div className="canvas-custom-controls-floating" style={{ position: "absolute", top: "15px", left: "15px", display: "flex", flexDirection: "column", gap: "8px", zIndex: 100 }}>
                  
                  {/* PLUS ICON (ZOOM IN) */}
                  <button 
                    title="Zoom In" 
                    className="ctrl-f-btn" 
                    onClick={() => document.querySelector('.react-flow__controls-zoomin')?.click()} 
                    style={{ cursor: "pointer", background: "#2a2a2a", border: "1px solid #555", borderRadius: "8px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>

                  {/* MINUS ICON (ZOOM OUT) */}
                  <button 
                    title="Zoom Out" 
                    className="ctrl-f-btn" 
                    onClick={() => document.querySelector('.react-flow__controls-zoomout')?.click()} 
                    style={{ cursor: "pointer", background: "#2a2a2a", border: "1px solid #555", borderRadius: "8px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>

                  {/* SCREEN / SQUARE ICON (FIT VIEW) */}
                  <button 
                    title="Fit View Window" 
                    className="ctrl-f-btn" 
                    onClick={() => document.querySelector('.react-flow__controls-fitview')?.click()} 
                    style={{ cursor: "pointer", background: "#2a2a2a", border: "1px solid #555", borderRadius: "8px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    </svg>
                  </button>

                  {/* LOCK / HAND PAN SWITCH */}
                  <button 
                    title="Toggle Drag/Pan Lock" 
                    className={`ctrl-f-btn ${isPanMode ? 'active-tool' : ''}`} 
                    onClick={() => setIsPanMode(!isPanMode)} 
                    style={{ cursor: "pointer", background: isPanMode ? "#ff9800" : "#2a2a2a", border: isPanMode ? "1px solid #fff" : "1px solid #555", borderRadius: "8px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    {isPanMode ? (
                      /* UNLOCKED / HAND MODE STATE SVG */
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                      </svg>
                    ) : (
                      /* LOCKED STATE SVG */
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    )}
                  </button>
                </div>

                <div className="reactflow-centered-viewport" style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
                  {loading ? (
                    <div style={{ color: "#fff", textAlign: "center", paddingTop: "150px", fontSize: "18px" }}>🔄 Fetching Live Nodes Schema...</div>
                  ) : (
                    <ReactFlow 
                      nodes={nodes} 
                      edges={edges} 
                      nodeTypes={nodeTypes} 
                      fitView 
                      fitViewOptions={{ padding: 0.3 }}
                      minZoom={0.1} 
                      maxZoom={1.5}
                      panOnDrag={isPanMode} 
                      selectionOnDrag={!isPanMode}
                    >
                      <Background color="#333" gap={20} size={1} />
                      <Controls position="top-left" style={{ display: "none" }} /> 
                    </ReactFlow>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TemplateInfo filename={currentFile} />
      <RelatedTemplates onSelectCard={(newFile) => {
        setCurrentFile(newFile);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }} />

      <BonusSection/>
      <PricingBonusTable/>
      <WhyChooseUs/>
      <WorkingProcess/>
      <TestimonialSlider/>
      <FaqSection/>
      <ContactEnquiry/>
      <LetsTalkCTA/>

      {showModal && (
        <GetInTouchModal 
          isForced={isModalForced}
          onClose={() => setShowModal(false)} 
          onSubmitSuccess={handleFormSubmitSuccess} 
        />
      )}
    </div>
  );
}

export default TemplateDetail;