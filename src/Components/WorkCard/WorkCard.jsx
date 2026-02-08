import "../Card/Card.css";
import React, { useEffect, useState } from "react";
import Emoji from "../Emoji/Emoji";

function WorkCard(props) {
  const [tagComponents, setTagComponents] = useState([]);

  useEffect(() => {
    var tags = String(props.card.techStack || props.card.tags).split(",");
    const components = tags.map((tag) => {
      return <div className="tag">{tag}</div>;
    });
    setTagComponents(components);
  }, [props]);

  return (
    <div className="card">
      <div className="container">
        <div className="card-title">
          <Emoji name={props.card.emoji} width={25} height={25} />
          <h3>{props.card.title}</h3>
        </div>
        <h4 style={{ margin: "0", color: "var(--text-accent)" }}>
          {props.card.role}
        </h4>
        <h3>{props.card.description}</h3>
        <div className="card-links">
          <a href={props.card.website} target="_blank" rel="noreferrer">
            Website
          </a>
        </div>
        <div className="tag-container" id={props.card.containerID}>
          {tagComponents}
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
