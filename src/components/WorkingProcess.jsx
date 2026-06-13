import "./WorkingProcess.css";

import CenterCircle from "../assets/icons/circle.png";

import {
  Building2,
  Paintbrush2,
  Leaf,
  ScanLine,
  Layers3,
  Brain,
} from "lucide-react";

function WorkingProcess() {

  return (

    <section className="working-process-section">

      {/* ================= HEADING ================= */}

      <div className="working-heading">

        <h1>
          Working Process
        </h1>

        <div className="heading-line"></div>

      </div>

      {/* ================= PROCESS AREA ================= */}

      <div className="process-wrapper">

        {/* ================= LEFT ================= */}

        <div className="process-left">

          {/* CARD 1 */}

          <div className="process-card left-card top-left">

            <div className="process-icon">
              <Building2 size={30} strokeWidth={2.4} />
            </div>

            <div>

              <h3>
                Business Understanding
              </h3>

              <p>
                We create smart, functional, and stylishplans that match your needs, lifestyle,and design vision perfectly.
              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="process-card left-card middle-left">

            <div className="process-icon">
              <ScanLine size={30} strokeWidth={2.4} />
            </div>

            <div>

              <h3>
                Weekly 1:1 Update
              </h3>

              <p>
                We transform old or dull spaces intomodern, efficient, and stylishenvironments with minimal disruption.
              </p>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="process-card left-card bottom-left">

            <div className="process-icon">
              <Layers3 size={30} strokeWidth={2.4} />
            </div>

            <div>

              <h3>
                Clean Architecture
              </h3>

              <p>
                Clean, thoughtful architecture focusingon smart layouts, functionality, andtimeless design aesthetics.
              </p>

            </div>

          </div>

        </div>

        {/* ================= CENTER ================= */}

        <div className="process-center">

          <img
            src={CenterCircle}
            alt=""
            className="center-process-img"
          />

        </div>

        {/* ================= RIGHT ================= */}

        <div className="process-right">

          {/* CARD 4 */}

          <div className="process-card right-card top-right">

            <div>

              <h3>
                RND
              </h3>

              <p>
                Quality construction with trusted materials,skilled workmanship, and smooth executionto deliver durable and beautiful spaces.
              </p>

            </div>

            <div className="process-icon">
              <Brain size={30} strokeWidth={2.4} />
            </div>

          </div>

          {/* CARD 5 */}

          <div className="process-card right-card middle-right">

            <div>

              <h3>
                Design UI & UX
              </h3>

              <p>
                Unique design concepts crafted creatively to reflect your personality and enhancethe overall beauty of your space.
              </p>

            </div>

            <div className="process-icon">
              <Paintbrush2 size={30} strokeWidth={2.4} />
            </div>

          </div>

          {/* CARD 6 */}

          <div className="process-card right-card bottom-right">

            <div>

              <h3>
                Development
              </h3>

              <p>
                Designs that blend natural light,greenery,and eco-friendly materialsto create calm,refreshing, nature-connected spaces.
              </p>

            </div>

            <div className="process-icon">
              <Leaf size={30} strokeWidth={2.4} />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WorkingProcess;