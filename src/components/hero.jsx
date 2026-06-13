import "./hero.css";
import Brands from "./brands";

function Hero() {

  return (

    <section className="hero">

      <div className="hero-content">

        {/* LEFT */}

        <div className="hero-left">

          <h1>
            AdyLabs.AI
          </h1>

        </div>

        {/* MIDDLE */}

        <div className="hero-middle">

          <p>
            We Build AI Systems That Work for Your Business
            <br />
            24/7
          </p>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <button>
            Book Free Quote
          </button>

        </div>

      </div>

      {/* BRANDS */}

      <Brands />

    </section>

  );
}

export default Hero;