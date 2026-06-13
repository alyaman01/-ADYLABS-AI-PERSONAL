import React from 'react';
import "./PricingBonusTable.css";
// Tumhari free text wali image ka path yahan check kar lena dost
import FreeTextImg from "../assets/icons/free.svg"; 

function PricingBonusTable() {
  const bonusData = [
    { investment: "$2.5K – $5K", automations: "1", worth: "$1,699" },
    { investment: "$5K – $10K", automations: "2", worth: "$2,999" },
    { investment: "$10K – $15K", automations: "4", worth: "$3,999" },
    { investment: "$15K – $20K", automations: "6", worth: "$5,999" },
    { investment: "$20K – $40K", automations: "8", worth: "$8,999" },
  ];

  return (
    <div className="bonus-section">
      
      {/* Top Heading Section */}
      <div className="bonus-header">
        <img src={FreeTextImg} alt="FREE" className="bonus-free-badge" />
        <h1 className="bonus-title">
          AI <span className="highlight-yellow">Automation</span> Bonus
        </h1>
        <p className="bonus-subtitle">For High-Value Clients</p>
      </div>

      {/* Main Container for Table */}
      <div className="table-wrapper">
        <table className="bonus-table">
          <thead>
            <tr>
              <th>Client Investment</th>
              <th>Free Automations</th>
              <th>🎁 Bonus Worth</th>
            </tr>
          </thead>
          <tbody>
            {bonusData.map((row, index) => (
              <tr key={index}>
                <td className="font-bold">{row.investment}</td>
                <td className="font-bold center-text">{row.automations}</td>
                <td className="font-bold">{row.worth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default PricingBonusTable;