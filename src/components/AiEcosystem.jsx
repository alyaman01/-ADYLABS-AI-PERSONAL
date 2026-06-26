import "./AiEcosystem.css";

import AiFace from "../assets/illustration/ai_image.svg";

import Logo from "../assets/logos/mainlogo.jpeg";
import ButtonBg from "../assets/illustration/buttonbg.jpg";

function AiEcosystem() {

  return (

    <section className="ecosystem">

      {/* HEADING */}

      <h1 className="ecosystem-heading">
        “ One partner. One AI ecosystem.
        Endless possibilities. “
      </h1>

      {/* BUTTON */}

      <div className="consultation-btn">

    <button
       style={{
       backgroundImage: `url(${ButtonBg})`
       }}
        >
       Book Consultation
    </button>

      </div>

      {/* IMAGE + FLOATING CARD */}

      <div className="ecosystem-image-box">

        <img
          src={AiFace}
          alt="AI"
        />

        {/* FLOATING CARD */}

        <div className="floating-card">

          <div className="admire-logo">

            <img
            src={Logo}
            alt="logo"
            />
            
          </div>

          <h2>AI</h2>

          <h1>CAN</h1>

          <h3>Change</h3>

          <h1>LIFE</h1>

        </div>

      </div>

    </section>
  );
}

export default AiEcosystem;