import "./Industries.css";
import BgImage from "../assets/illustration/buttonbg.jpg";

function Industries() {

  const industries = [
    {
      icon: "🛒",
      title: "E - Commerce",
      text: "AI for support, order handling, recommendations, and upselling.",
      active: true,
    },

    {
      icon: "📈",
      title: "Real Estate",
      text: "AI lead qualification, follow-ups, and appointment booking.",
    },

    {
      icon: "🏆",
      title: "Education",
      text: "AI tutors, onboarding assistants, and support bots.",
      active: true,
    },

    {
      icon: "🏥",
      title: "Healthcare",
      text: "AI assistants for patient communication and data handling.",
    },

    {
      icon: "🙋‍♀️",
      title: "Customer Support",
      text: "24/7 AI agents with human-level responses.",
      active: true,
    },

    {
      icon: "📊",
      title: "Finance",
      text: "Secure AI for customer queries, reports, and workflows.",
    },

    {
      icon: "✏️",
      title: "Content Creation",
      text: "AI-generated content, ads, and social media automation.",
      active: true,
    },

    {
      icon: "🏨",
      title: "Hospitality",
      text: "Customer direct call and book your Hotel in minutes",
    },
  ];

  return (

    <section className="industries">

      {/* HEADING */}

      <h1 className="industries-heading">
        <span>Industries</span> & Use - Case
      </h1>

      <p className="industries-subtext">
        AI Solutions Built for Your Industry
      </p>

      {/* MAIN BACKGROUND BOX */}

      <div
     className="industries-bg"
     style={{
     backgroundImage: `url(${BgImage})`,
     }}
     >

        {/* CENTER ICON */}

        <div className="center-icon">
          💡
        </div>

        {/* CARDS */}

        <div className="industries-grid">

          {industries.map((item, index) => (

            <div
              className={`industry-card ${item.active ? "active" : ""}`}
              key={index}
            >

              <div className="industry-icon">
                {item.icon}
              </div>

              <div>

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Industries;