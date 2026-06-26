import "./DemoVideos.css";

import Video1 from "../assets/videos/video1.webp";
import Video2 from "../assets/videos/video2.webp";
import Video3 from "../assets/videos/video3.jpeg";
import Video4 from "../assets/videos/video4.jpg";
import Video5 from "../assets/videos/video5.jpeg";
import Video6 from "../assets/videos/video6.jpeg";

function DemoVideos() {

  const videos = [
    Video1,
    Video2,
    Video3,
    Video4,
    Video5,
    Video6,
  ];

  return (

    <section className="demo-videos">

      <h1>
        Quick <span>Demo Videos</span>
      </h1>

      <div className="videos-grid">

        {videos.map((video, index) => (

          <div className="video-card" key={index}>

            <img
              src={video}
              alt="video thumbnail"
            />

            <div className="play-btn">
              ▶
            </div>

          </div>

        ))}

      </div>

      {/* BUTTON */}
     <div className="project-btn-wrapper">

     <button className="project-btn">
          Start My Project
     </button>

      </div>

    </section>
  );
}

export default DemoVideos;