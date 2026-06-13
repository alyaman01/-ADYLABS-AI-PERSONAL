import "./demo.css";

import Frame from "../assets/illustration/video frame.svg";
import VideoBanner from "../assets/illustration/video banner.svg";

function Demo() {
  return (
    <section className="demo">

      <h1>
        How we <span>help you</span>
      </h1>

      <p>
        We helped raise $30K with just one video!
      </p>

      <div className="video-section">

        {/* FRAME */}
       
        {/* VIDEO BANNER */}
        <div className="video-wrapper">

          <img
            src={VideoBanner}
            alt="video banner"
            className="video-banner"
          />

          {/* PLAY BUTTON */}
          <a
            href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
            target="_blank"
            rel="noreferrer"
          >
            <div className="play-button">
              ▶
            </div>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Demo;