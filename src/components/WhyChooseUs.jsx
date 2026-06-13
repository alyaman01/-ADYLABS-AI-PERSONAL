import "./WhyChooseUs.css";
import FreeTagImg from "../assets/icons/free.svg";

import {
  Lightbulb,
  BrainCircuit,
  ShieldCheck,
  Rocket,
  Megaphone,
  Bot,
  BadgeCheck,
} from "lucide-react";

function WhyChooseUs() {

  const cards = [

    {
      icon: <Rocket size={38} strokeWidth={2.4} />,
      title: "Faster Deployment",
      text:
        "We move fast — from idea to working AI system in weeks, not months.",
    },

    {
      icon: <BrainCircuit size={38} strokeWidth={2.4} />,
      title: "Custom AI Models",
      text:
        "Your AI is trained for your business, not generic data.",
    },

    {
      icon: <ShieldCheck size={38} strokeWidth={2.4} />,
      title: "Enterprise Security",
      text:
        "Your data stays private, encrypted, and fully protected.",
    },

    {
      icon: <Megaphone size={38} strokeWidth={2.4} />,
      title: "ROI-Driven Approach",
      text:
        "Every AI solution is designed to increase revenue or reduce cost.",
    },

    {
      icon: <Bot size={38} strokeWidth={2.4} />,
      title: "24/7 Automation",
      text:
        "Your business works even when your team is offline.",
    },

    {
      icon: <BadgeCheck size={38} strokeWidth={2.4} />,
      title: "Free for 4 Year",
      text:
        "Your automation works 24x7 without fail and it's free for 4 years.",
      green: true,
    },

  ];

  return (

    <section className="why-section">

      {/* ================= TOP ================= */}

      <div className="why-top">

        <div className="bulb-wrap">

          <Lightbulb
            size={85}
            strokeWidth={2.2}
            fill="#ffd54a"
          />

        </div>

        <h1>
          <span>Why</span> Choose Us ?
        </h1>

        <h2>
          Why Businesses Choose Us Over Traditional Agencies
        </h2>

        <p>
          We design AI systems that solve real business problems.
        </p>

      </div>

      {/* ================= GRID ================= */}

      <div className="why-grid">

        {cards.map((item, index) => (

          <div
            className={`why-card ${item.green ? "green-card" : ""}`}
            key={index}
          >

            <div className="icon-circle">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.text}
            </p>

            {item.green && (

           <img
           src={FreeTagImg}
           alt=""
           className="free-tag-img"
           />

           )}

          </div>

        ))}

      </div>

      

    </section>
  );
}

export default WhyChooseUs;