import React, { useState, useEffect } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css"; 
import "./TemplateDetail.css";

/* ================= TARGET ASSETS IMPORTS ================= */
import ProfileImg from "../../assets/marketplace/yashpic.svg";
import VerifyIcon from "../../assets/marketplace/verifyed.png";
import CopyIcon from "../../assets/marketplace/copy.svg";
import DownloadIcon from "../../assets/marketplace/download.svg";

/* TOP LEVEL CATEGORY UTILITIES ICONS */
import CurleyIcon from "../../assets/marketplace/curlybraces.svg";
import Sheet from "../../assets/marketplace/gogle sheets.png";
import MessageBox from "../../assets/marketplace/messagebox.png";
import CursorIcon from "../../assets/marketplace/airo.png";

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

function TemplateDetail({ filename, onBack }) {
  const [currentFile, setCurrentFile] = useState(filename);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [loading, setLoading] = useState(true);

  /* 🔐 LEAD GENERATION STATES */
  const [isVerified, setIsVerified] = useState(false); 
  const [showModal, setShowModal] = useState(false);   
  const [pendingAction, setPendingAction] = useState(null); 
  const [isModalForced, setIsModalForced] = useState(false); 

  useEffect(() => {
    setCurrentFile(filename);
  }, [filename]);

  // 🕒 1️⃣ FIRST TRIGGER: Page load hone ke 3 second baad
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
          generateFallbackFlow();
          setLoading(false);
          return;
        }

        const data = await res.json();

        if (data.nodes) {
          const mappedNodes = data.nodes.map((node, i) => ({
            id: node.id || `node_${i}`,
            type: "default",
            data: { label: node.name || node.type },
            position: { x: (node.position?.x || i * 220) + 80, y: (node.position?.y || 150) + 60 },
            style: {
              background: "#ffffff",
              color: "#111111",
              border: "1px solid #e2e2e2",
              borderRadius: "14px",
              padding: "16px 24px",
              fontWeight: "700",
              fontSize: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.02)",
              minWidth: "160px",
              textAlign: "center"
            }
          }));
          setNodes(mappedNodes);
        }

        if (data.connections) {
          const mappedEdges = [];
          Object.keys(data.connections).forEach((sourceNode) => {
            const outputs = (data.connections[sourceNode] && data.connections[sourceNode].main) || [];
            outputs.forEach((targetObj) => {
              mappedEdges.push({
                id: `edge_${sourceNode}_${targetObj.node}`,
                source: sourceNode,
                target: targetObj.node,
                animated: true,
                style: { stroke: "#efbe2f", strokeWidth: 2.5 },
              });
            });
          });
          setEdges(mappedEdges);
        }

      } catch (err) {
        console.error("Canvas layout error:", err);
        generateFallbackFlow();
      }
      setLoading(false);
    };

    loadGithubWorkflow();
  }, [currentFile]);

  const generateFallbackFlow = () => {
    setNodes([
      { id: "1", data: { label: "📩 When chat message received" }, position: { x: 100, y: 200 }, style: { background: '#fff', border: '1px solid #ddd', padding: 15, borderRadius: 10, fontWeight: 'bold' } },
      { id: "2", data: { label: "🤖 AI Agent (Tools Master)" }, position: { x: 400, y: 200 }, style: { background: '#fff', border: '1px solid #efbe2f', padding: 15, borderRadius: 10, fontWeight: 'bold' } },
      { id: "3", data: { label: "✅ Success Flow Route" }, position: { x: 700, y: 120 }, style: { background: '#fff', border: '1px solid #ddd', padding: 15, borderRadius: 10, fontWeight: 'bold' } },
      { id: "4", data: { label: "❌ Failure Log Trigger" }, position: { x: 700, y: 280 }, style: { background: '#fff', border: '1px solid #ddd', padding: 15, borderRadius: 10, fontWeight: 'bold' } },
    ]);
    setEdges([
      { id: "e1-2", source: "1", target: "2", animated: true },
      { id: "e2-3", source: "2", target: "3", animated: true, label: "True" },
      { id: "e2-4", source: "2", target: "4", animated: true, label: "False" },
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
              <div className="detail-badge-box"><img src={CurleyIcon} alt="Curly" /></div>
              <div className="detail-badge-box"><img src={Sheet} alt="Sheet" /></div>
              <div className="detail-badge-box"><img src={MessageBox} alt="Message" /></div>
              <div className="detail-badge-box"><img src={CursorIcon} alt="Cursor" /></div>
            </div>

            {/* 🎯 FIXED HEADING MAP */}
            <h1 className="template-main-title">
              Personal life manager with Telegram, Google services & voice-enabled AI
            </h1>

            {/* 🎯 FIXED SUBHEADING DESCRIPTION MAP */}
            <p className="template-description">
              This project teaches you to create a personal AI assistant named Jackie that operates through Telegram
            </p>

            <div className="creator-profile-card">
              <div className="creator-info">
                <img src={ProfileImg} alt="Creator" className="creator-avatar" />
                <span className="creator-name">Yashveer Giri</span>
                <img src={VerifyIcon} alt="Verified" className="verify-icon" style={{ width: '22px', height: '22px' }} />
              </div>
              
              <div className="detail-action-buttons">
                <button 
                  className="dt-btn dt-copy" 
                  title="Copy Raw Code"
                  onClick={() => handleActionButtonClick("copy")}
                >
                  <img src={CopyIcon} alt="Copy" />
                </button>

                <button 
                  className="dt-btn dt-download" 
                  title="Download Schema File"
                  onClick={() => handleActionButtonClick("download")}
                >
                  <img src={DownloadIcon} alt="Download" />
                </button>
              </div>
            </div>
          </div>

          <div className="detail-right-canvas-panel">
            <ReactFlow nodes={nodes} edges={edges} fitView>
              <Background color="#dfdfdf" gap={18} size={1.5} />
              <Controls />
            </ReactFlow>
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