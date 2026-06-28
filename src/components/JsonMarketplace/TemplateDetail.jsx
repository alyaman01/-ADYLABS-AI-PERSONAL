import React, { useState, useEffect } from "react";
import { ReactFlow, Background, Controls, Handle, Position } from "@xyflow/react";
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

// 👑 POPUP CARD COMPONENT
import GetInTouchModal from "../GetInTouchModal"; 

/* ================= 🌐 FIXED GITHUB ICON EXTRACTOR UTILITY ================= */
const getN8nIconUrl = (nodeType) => {
  if (!nodeType) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Webhook/webhook.svg";
  let cleanName = nodeType.split('.').pop();
  
  // High reliability production URLs for n8n core packages
  if (cleanName.toLowerCase().includes("telegram")) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Telegram/telegram.svg";
  if (cleanName.toLowerCase().includes("sheet")) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Google/Sheets/googleSheets.svg";
  if (cleanName.toLowerCase().includes("openai") || cleanName.toLowerCase().includes("agent")) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/OpenAi/openAi.svg";
  if (cleanName.toLowerCase().includes("calendar")) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Google/Calendar/googleCalendar.svg";
  if (cleanName.toLowerCase().includes("drive")) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Google/Drive/googleDrive.svg";
  if (cleanName.toLowerCase().includes("slack")) return "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Slack/slack.svg";

  return `https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/${cleanName}/${cleanName}.svg`;
};

/* ================= 🎨 CUSTOM REACTFLOW NODES ================= */
const N8nHubNode = ({ data }) => {
  return (
    <div className={`n8n-hub-card ${data.isTrigger ? 'trigger-border' : ''}`}>
      {data.hasTarget !== false && <Handle type="target" position={Position.Left} className="hub-handle" />}
      
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

      {data.hasSource !== false && <Handle type="source" position={Position.Right} className="hub-handle" />}
    </div>
  );
};

const N8nAiAgentNode = ({ data }) => {
  return (
    <div className="n8n-hub-ai-agent-card">
      <Handle type="target" position={Position.Left} className="hub-handle" />
      
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

      <Handle type="source" position={Position.Right} className="hub-handle" />
    </div>
  );
};

const nodeTypes = {
  hubNode: N8nHubNode,
  aiAgentNode: N8nAiAgentNode
};

/* ================= MAIN COMPONENT ================= */
function TemplateDetail({ filename, onBack }) {
  const [currentFile, setCurrentFile] = useState(filename);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topBadges, setTopBadges] = useState([]);

  /* 🔐 LEAD GENERATION STATES */
  const [isVerified, setIsVerified] = useState(false); 
  const [showModal, setShowModal] = useState(false);   
  const [pendingAction, setPendingAction] = useState(null); 
  const [isModalForced, setIsModalForced] = useState(false); 

  useEffect(() => {
    setCurrentFile(filename);
  }, [filename]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVerified) {
        setIsModalForced(false); 
        setShowModal(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isVerified, currentFile]);

  useEffect(() => {
    const loadGithubWorkflow = async () => {
      try {
        setLoading(true);
        const repoEndpoint = `https://raw.githubusercontent.com${currentFile}`;
        const res = await fetch(repoEndpoint);
        
        if (!res.ok) {
          generateProFallbackFlow();
          setLoading(false);
          return;
        }

        const data = await res.json();

        if (data.nodes) {
          const uniqueIcons = [];
          
          const mappedNodes = data.nodes.map((node, i) => {
            const dynamicIcon = getN8nIconUrl(node.type);
            if (!uniqueIcons.includes(dynamicIcon) && uniqueIcons.length < 4) {
              uniqueIcons.push(dynamicIcon);
            }

            let flowNodeType = "hubNode";
            if (node.type?.toLowerCase().includes("openai") || node.type?.toLowerCase().includes("agent")) {
              flowNodeType = "aiAgentNode";
            }

            return {
              id: node.id || `node_${i}`,
              type: flowNodeType,
              data: { 
                label: node.name || "Action Node", 
                subtitle: node.type ? node.type.split('.').pop() : "n8n Integration",
                iconUrl: dynamicIcon,
                status: i === 0 ? "Live" : i % 3 === 0 ? "Complex" : "Active",
                metrics: i === 1 ? "5.6k/min TPS" : null,
                isTrigger: i === 0
              },
              position: { 
                x: node.position?.x ? node.position.x : (i * 240) + 40, 
                y: node.position?.y ? node.position.y : 150 + (i % 2 === 0 ? 60 : -60) 
              }
            };
          });

          setNodes(mappedNodes);
          setTopBadges(uniqueIcons);
        } else {
          generateProFallbackFlow();
        }

        if (data.connections) {
          const mappedEdges = [];
          Object.keys(data.connections).forEach((sourceNode) => {
            const outputs = (data.connections[sourceNode] && data.connections[sourceNode].main) || [];
            outputs.forEach((targetGroup) => {
              targetGroup.forEach((targetObj) => {
                if (targetObj && targetObj.node) {
                  mappedEdges.push({
                    id: `edge_${sourceNode}_${targetObj.node}`,
                    source: sourceNode,
                    target: targetObj.node,
                    animated: true,
                    style: { stroke: "#a0aec0", strokeWidth: 2, strokeDasharray: "5,5" },
                  });
                }
              });
            });
          });
          setEdges(mappedEdges);
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
    const telegramIcon = "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Telegram/telegram.svg";
    const sheetIcon = "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Google/Sheets/googleSheets.svg";
    const calendarIcon = "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Google/Calendar/googleCalendar.svg";
    const driveIcon = "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Google/Drive/googleDrive.svg";
    const slackIcon = "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Slack/slack.svg";

    setTopBadges([telegramIcon, sheetIcon, calendarIcon, driveIcon]);

    // X positions are optimized so diagram fits cleanly in the center viewport bounds
    setNodes([
      { id: "trig", type: "hubNode", position: { x: 20, y: 250 }, data: { label: "Telegram meseage...", subtitle: "Trigger", iconUrl: telegramIcon, isTrigger: true } },
      
      { id: "sheet1", type: "hubNode", position: { x: 270, y: 60 }, data: { label: "Google Sheets Data", subtitle: "Parse", iconUrl: sheetIcon, metrics: "5.6k/min TPS", status: "Live" } },
      { id: "cal1", type: "hubNode", position: { x: 270, y: 190 }, data: { label: "Google Calendar", subtitle: "Event Check", iconUrl: calendarIcon, status: "Active" } },
      { id: "drive1", type: "hubNode", position: { x: 500, y: 130 }, data: { label: "Google Drive", subtitle: "storage", iconUrl: driveIcon, status: "Live" } },
      
      { id: "voice1", type: "hubNode", position: { x: 270, y: 380 }, data: { label: "Google Speech-to-", subtitle: "Text", iconUrl: "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Webhook/webhook.svg", status: "Active" } },
      { id: "script1", type: "hubNode", position: { x: 270, y: 500 }, data: { label: "N8N Script Logic", subtitle: "JS Engine", iconUrl: "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Webhook/webhook.svg" } },
      { id: "context1", type: "hubNode", position: { x: 500, y: 440 }, data: { label: "Contextual", subtitle: "analysis", iconUrl: "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Webhook/webhook.svg", status: "Complex" } },
      
      { id: "aiCore", type: "aiAgentNode", position: { x: 740, y: 230 }, data: { label: "AI Agent (GPT-4)", metrics: "12.1k/min TPS" } },
      
      { id: "telOut", type: "hubNode", position: { x: 1010, y: 70 }, data: { label: "Telegram Response", subtitle: "API Push", iconUrl: telegramIcon, status: "Active" } },
      { id: "calOut", type: "hubNode", position: { x: 1010, y: 170 }, data: { label: "Google Calendar", subtitle: "Udpats", iconUrl: calendarIcon, status: "Active" } },
      { id: "sheetOut", type: "hubNode", position: { x: 1010, y: 270 }, data: { label: "Google Sheets Log", subtitle: "Append", iconUrl: sheetIcon, status: "Active" } },
      { id: "slackOut", type: "hubNode", position: { x: 1010, y: 370 }, data: { label: "Slack Notification", subtitle: "Channel Sync", iconUrl: slackIcon, status: "Inactive" } },
      { id: "failOut", type: "hubNode", position: { x: 1010, y: 470 }, data: { label: "Execution Failure Route", subtitle: "Error Catch", iconUrl: "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/Webhook/webhook.svg", status: "Inactive" } }
    ]);

    setEdges([
      { id: "e-trig-sheet", source: "trig", target: "sheet1", animated: true },
      { id: "e-trig-cal", source: "trig", target: "cal1", animated: true },
      { id: "e-trig-voice", source: "trig", target: "voice1", animated: true },
      { id: "e-trig-script", source: "trig", target: "script1", animated: true },
      { id: "e-sheet-drive", source: "sheet1", target: "drive1", animated: true },
      { id: "e-cal-drive", source: "cal1", target: "drive1", animated: true },
      { id: "e-voice-context", source: "voice1", target: "context1", animated: true },
      { id: "e-script-context", source: "script1", target: "context1", animated: true },
      { id: "e-drive-ai", source: "drive1", target: "aiCore", animated: true },
      { id: "e-context-ai", source: "context1", target: "aiCore", animated: true },
      { id: "e-ai-tel", source: "aiCore", target: "telOut", animated: true },
      { id: "e-ai-cal", source: "aiCore", target: "calOut", animated: true },
      { id: "e-ai-sheet", source: "aiCore", target: "sheetOut", animated: true },
      { id: "e-ai-slack", source: "aiCore", target: "slackOut", animated: true },
      { id: "e-ai-fail", source: "aiCore", target: "failOut", animated: true }
    ]);
  };

  const executeAction = (actionType) => {
    if (actionType === "copy") {
      navigator.clipboard.writeText(JSON.stringify({ nodes, edges }, null, 2));
      alert("JSON Code copied to clipboard successfully! 🔥");
    } else if (actionType === "download") {
      const blob = new Blob([JSON.stringify({ nodes, edges }, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${currentFile ? currentFile.split("/").pop().replace(".json", "") : "n8n-template"}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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

  if (loading) {
    return <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", paddingTop: "200px", background: "#ffffff", height: "100vh" }}>🔄 Generating Live n8n Automation Canvas...</div>;
  }

  return (
    <div className="template-detail-page">
      <div className="detail-top-colored-bg">
        <div className="back-navigation" onClick={onBack}>
          <span className="arrow-back">←</span>
          <span>Back to template</span>
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

            <h1 className="template-main-title">
              Personal life manager with Telegram, Google services & voice-enabled AI
            </h1>

            <p className="template-description">
              A comprehensive production-grade control panel managing massive, multi-faceted n8n automation ecosystems with advanced logic and live monitoring.
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
              <div className="hub-header-right">
                <span className="hub-bell">🔔</span>
                <img src={ProfileImg} alt="User" className="hub-user-pfp" />
              </div>
            </div>

            <div className="hub-workspace-body">
              <div className="hub-mini-sidebar">
                <div className="sidebar-icon active">🏠</div>
                <div className="sidebar-icon">📂</div>
                <div className="sidebar-icon">📈</div>
                <div className="sidebar-icon">⚙️</div>
                <div className="sidebar-icon">🔑</div>
              </div>

              {/* FIXED BOUNDS OVERLAP CONTAINER VIEWPORT */}
              <div className="hub-core-canvas-area">
                
                {/* Embedded ReactFlow locked centrally */}
                <div className="reactflow-centered-viewport">
                  <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView minZoom={0.2} maxZoom={1.5}>
                    <Background color="#333" gap={20} size={1} />
                    <Controls position="top-left" />
                  </ReactFlow>
                </div>

                {/* Left Side Floating Panels */}
                <div className="hub-floating-left-rail">
                  <div className="embedded-panel footer-timeline">
                    <div className="panel-title">Execution Timeline</div>
                    <div className="panel-subtitle">Live graph</div>
                    <div className="mock-sparkline">
                      <div className="bar" style={{ height: '30%' }}></div>
                      <div className="bar" style={{ height: '50%' }}></div>
                      <div className="bar" style={{ height: '45%' }}></div>
                      <div className="bar" style={{ height: '85%' }}></div>
                      <div className="bar" style={{ height: '70%' }}></div>
                      <div className="bar" style={{ height: '95%' }}></div>
                    </div>
                  </div>

                  <div className="embedded-panel footer-logs">
                    <div className="panel-title">Execution Logs</div>
                    <div className="logs-terminal-stream">
                      <div><span className="time">[09:55 PM]</span> Streaming logs...</div>
                      <div><span className="time">[03:17 AM]</span> Sheets sync update...</div>
                      <div><span className="time">[01:10 AM]</span> Context Analysis OK.</div>
                    </div>
                  </div>
                </div>

                {/* Right Side Floating Sidebar */}
                <div className="hub-floating-right-rail">
                  <div className="rail-card">
                    <div className="panel-title">Execution Timeline</div>
                    <div className="mock-chart-graphic">⚡ Pipeline Stable</div>
                  </div>

                  <div className="rail-card">
                    <div className="panel-title">Execution Logs</div>
                    <div className="mini-logs-list">
                      <div className="log-row success">● 09:55 PM - Active stream</div>
                      <div className="log-row success">● 08:15 AM - Webhook fired</div>
                      <div className="log-row fail">● 04:12 AM - Timeout trace</div>
                    </div>
                  </div>

                  <div className="rail-card">
                    <div className="panel-title">Credential Status</div>
                    <div className="credential-pill-row">
                      <span className="status-lbl green">Live: Active</span>
                    </div>
                  </div>

                  <div className="rail-card">
                    <div className="panel-title">Resource Usage</div>
                    <div className="usage-progress-bar">
                      <div className="fill" style={{ width: '65%' }}></div>
                    </div>
                    <span className="usage-txt">CPU: 65% | Mem: 2.1GB</span>
                  </div>
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