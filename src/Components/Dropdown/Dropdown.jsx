import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown() {
  const [display, setDisplay] = useState("block");

  const toggle = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };
  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => toggle()}>
        <h2>GET /alice/skills</h2>
      </div>
      <div className="dropdown-information" style={{ display: display }}>
        <code>{`{
          languages: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Sass', 'HTML and CSS', 'Java', 'R'], data: ['MySQL', 'PostgreSQL']
        }`}</code>
      </div>
    </div>
  );
}

export default Dropdown;
