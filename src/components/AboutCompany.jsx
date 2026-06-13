import "./AboutCompany.css";

import LogoImg from "../assets/logos/mainlogo.jpeg";

function AboutCompany() {

  return (

    <section className="about-company-section">

      {/* ================= TOP LOGO ================= */}

      <div className="about-main-logo">

        <h1>
          Ady<span>Labs</span>.AI
        </h1>

      </div>

      {/* ================= CONTENT BOX ================= */}

      <div className="about-company-box">

        {/* TOP SMALL LOGO */}

        <div className="small-logo-wrap">

          <img
            src={LogoImg}
            alt=""
            className="small-logo"
          />

        </div>

        {/* HEADING */}

        <h2>
          <span>AdyLabs.ai:</span> Smart AI Automation
        </h2>

        <h3>
          “Your Brand’s Partner in AI Innovation”
        </h3>

        {/* DESCRIPTION */}

        <div className="about-text">

          <p>
            AdyLabs.ai is an Intelligent AI Solutions Lab dedicated to
            transforming modern brands into AI-first organizations.
            We specialize in building custom automation ecosystems
            that help businesses operate faster, make smarter
            data-driven decisions, and scale without increasing costs.
             From developing smart AI Voice and Text Agents that
            handle 24/7 customer support to creating advanced systems
            like Custom LLMs and RAG (AI trained on your specific data),
            we replace manual effort with high-speed accuracy.
            Our expertise covers everything from business workflow
            automation and lead qualification to AI-powered marketing
            and secure enterprise architecture.
            By integrating cutting-edge technology into your daily
            operations, AdyLabs.ai ensures your business stays ahead
            of the curve with 24/7 automated execution and a scalable
            digital infrastructure.
          </p>

          

        
        </div>

      </div>

    </section>

  );
}

export default AboutCompany;