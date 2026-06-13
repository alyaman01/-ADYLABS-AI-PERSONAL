import "./JsonMarketplace.css";

/* ================= IMAGES ================= */

/* HERO */
import RobotImg from "../assets/marketplace/robot.png";
import ProfileImg from "../assets/marketplace/yashpic.svg";

/* ================= ICONS ================= */

import CurleyIcon from "../assets/marketplace/curlybraces.svg";
import MessageBox from "../assets/marketplace/messagebox.png";
import Trigger from "../assets/marketplace/trigeer.svg";
import GmailIcon from "../assets/marketplace/gmail.png";
import BotIcon from "../assets/marketplace/robot.png";
import CursorIcon from "../assets/marketplace/airo.png";
import Web from "../assets/marketplace/web icon.png";
import Drive from "../assets/marketplace/google drive.png";
import Sheet from "../assets/marketplace/gogle sheets.png";
import Button from "../assets/illustration/buttonbg.jpg";

import CopyIcon from "../assets/marketplace/copy.svg";
import DownloadIcon from "../assets/marketplace/download.svg";
import VerifyIcon from "../assets/marketplace/verifyed.png";

function JsonMarketplace() {

  /* ================= CARDS ================= */

  const cards = [

    {
      title:
        "Personal life manger with telegram, Google & Voice AI Agent Enable AI for Marketing Data Scaper",

      icons: [
        Web,
        GmailIcon,
        MessageBox,
        CursorIcon,
      ],
    },

    {
      title:
        "Talk to your google sheets with GPT 5 api and talk to your Agent",

      icons: [
        CurleyIcon,
        Sheet,
        MessageBox,
        CursorIcon,
      ],
    },

    {
      title:
        "Create a personalize assistant wit Claud cosde sonent 5.6 and best agent",

      icons: [
        Web,
        Drive,
        MessageBox,
        CursorIcon,
      ],
    },

    {
      title:
        "Personal life manger with telegram, Google & Voice AI Agent Enable AI for Marketing Data Scaper",

      icons: [
        Web,
        GmailIcon,
        MessageBox,
        CursorIcon,
      ],
    },

    {
      title:
        "Personal life manger with telegram, Google & Voice AI Agent Enable AI for Marketing Data Scaper",

      icons: [
        CurleyIcon,
        GmailIcon,
        MessageBox,
        CursorIcon,
      ],
    },

    {
      title:
        "Personal life manger with telegram, Google & Voice AI Agent Enable AI for Marketing Data Scaper",

      icons: [
        Web,
        GmailIcon,
        MessageBox,
        CursorIcon,
      ],
    },

  ];

  return (

    <section className="json-marketplace">

      {/* ================= TOP SECTION ================= */}

      <div className="marketplace-heading">

        <button
        className="market-btn"
        style={{
        backgroundImage: `url(${Button})`
        }}
        >
         Book Consultation
        </button>

        <h1>
          Json Marketplace
        </h1>

        <h2>
          Download <span>Templates</span>
        </h2>

        <p>
          Jason Templates
        </p>

      </div>

      {/* ================= FEATURED CARD ================= */}

      <div className="featured-card">

        {/* LEFT */}

        <div className="featured-left">

          {/* ICONS */}

          <div className="tool-icons">

            <div className="tool-box">
              <img src={CurleyIcon} alt="" />
            </div>

            <div className="tool-box">
              <img src={Trigger} alt="" />
            </div>

            <div className="tool-box">
              <img src={CursorIcon} alt="" />
            </div>

            <div className="tool-box">
              <img src={MessageBox} alt="" />
            </div>

          </div>

          {/* TITLE */}

          <h2>
            Build Your Frist AI Agent
          </h2>

          {/* AUTHOR */}

          <div className="author">

            <img
              src={ProfileImg}
              alt=""
              className="profile-img"
            />

            <div className="author-name">

              <span>
                Yashveer Giri
              </span>

              <img
                src={VerifyIcon}
                alt=""
                className="verify-icon"
              />

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="featured-right">

          <img
            src={RobotImg}
            alt=""
          />

        </div>

      </div>

      {/* ================= GRID ================= */}

      <div className="market-grid">

        {cards.map((item, index) => (

          <div
            className="market-card"
            key={index}
          >

            {/* ================= TOP ICONS ================= */}

            <div className="tool-icons">

              {item.icons.map((icon, i) => (

                <div
                  className="tool-box"
                  key={i}
                >

                  <img
                    src={icon}
                    alt=""
                    className="tool-icon-img"
                  />

                </div>

              ))}

            </div>

            {/* ================= TITLE ================= */}

            <h3>
              {item.title}
            </h3>

            {/* ================= BOTTOM ================= */}

            <div className="card-bottom">

              {/* AUTHOR */}

              <div className="author">

                <img
                  src={ProfileImg}
                  alt=""
                  className="profile-img"
                />

                <div className="author-name">

                  <span>
                    Yashveer Giri
                  </span>

                  <img
                    src={VerifyIcon}
                    alt=""
                    className="verify-icon"
                  />

                </div>

              </div>

              {/* ACTIONS */}

              <div className="actions">

                <button>

                  <img
                    src={CopyIcon}
                    alt=""
                  />

                </button>

                <button className="download-action">

                  <img
                    src={DownloadIcon}
                    alt=""
                  />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* ================= BOTTOM BUTTON ================= */}

      <div className="download-btn-wrap">

        <button className="download-btn">

          Download Json & Visit Marketplace

        </button>

      </div>

    </section>
  );
}

export default JsonMarketplace;