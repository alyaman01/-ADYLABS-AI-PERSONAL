import "./EasySolutions.css";

function EasySolutions() {

  const solutions = [
    {
      icon: "💡",
      text: "AI automates daily operations",
    },

    {
      icon: "🧑🏻‍💼",
      text: "AI agents respond instantly, day and night",
    },

    {
      icon: "💰",
      text: "Smart systems qualify and route leads",
    },

    {
      icon: "🪙",
      text: "Enhanced Accuracy & Quality: AI agents reduce human errors.",
    },

    {
      icon: "🧲",
      text: "Create videos without a camera. Wherever you are, Sleeping",
    },

    {
      icon: "🪄",
      text: "Costs go down, efficiency goes up",
    },

    {
      icon: "🪪",
      text: "AI generates videos with your face—so you can work freely without interruption",
    },

    {
      icon: "👉",
      text: "Decisions are backed by real data",
    },
  ];

  return (

    <section className="easy-solutions">

      {/* ONLY EASY SOLUTIONS WHITE */}

      <div className="top-content">

        <h1 className="easy-heading">
          <span>Easy</span> Solutions
        </h1>

      </div>

      {/* EVERYTHING ELSE GREY */}

      <div className="bottom-content">

        <h2 className="problem-heading">
          PROBLEM → SOLUTION
        </h2>

        <p className="easy-subtext">
          Most Businesses Are Struggling — Not Because of Effort,
          But Because of Inefficiency
        </p>

        <div className="solutions-grid">

          {solutions.map((item, index) => (

            <div
              className="solution-card"
              key={index}
            >

              <div className="solution-icon">
                {item.icon}
              </div>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default EasySolutions;