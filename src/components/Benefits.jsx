import "./benefits.css";

import {
  Bot,
  Mic,
  Boxes,
  RefreshCcw,
  Magnet,
  BadgeCheck
} from "lucide-react";

function Benefits() {

  const benefits = [

    {
      icon: Bot,
      title: "AI Agents & Chatbots",
      text: "Smart AI agents that handle customer queries,support, sales, and internaltasks automatically."
    },

    {
      icon: Mic,
      title: "Voice AI & AI Calling Systems",
      text: "Human-like voice agents that make,receive, and manage calls 24/7.."
    },

    {
      icon: Boxes,
      title: "Business Process Automation",
      text: "Automate workflows, CRM updates,lead handling, reporting, and more."
    },

    {
      icon: RefreshCcw,
      title: "Custom LLM Development",
      text: "Private AI models trainedon your company’s data."
    },

    {
      icon: Magnet,
      title: "RAG (Retrieval-Augmented Generation) ",
      text: "Human-like voice agents that make,receive, and manage calls 24/7"
    },

    {
      icon: BadgeCheck,
      title: "AI Content ( UGC Ads , Youtube)",
      text: "Automate workflows, CRM updates, leadhandling, reporting, and more"
    }

  ];

  return (

    <section className="benefits">

      <p className="benefits-text">

        We help companies automate operations,
        generate more leads, reduce costs,
        and scale faster using custom AI solutions.

      </p>

      <div className="benefits-grid">

        {benefits.map((item, index) => {

          const Icon = item.icon;

          return (

            <div className="benefit-card" key={index}>

              <div className="benefit-icon">

                <Icon size={55} strokeWidth={2.5} />

              </div>

              <h2>
                {item.title}
              </h2>

              <p>
                {item.text}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}

export default Benefits;