import "./Card.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Emoji from "../Emoji/Emoji";

function Card(props) {
  var link = "/" + String(props.card.title).replace(/ /g, "-").toLowerCase();
  const [tagComponents, setTagComponents] = useState([]);

  useEffect(() => {
    var tags = String(props.card.tags).split(",");
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
        <h3>{props.card.description}</h3>
        <h3>
          <Link to={link}>About</Link> \\{" "}
          <a href={props.card.website} target="_blank" rel="noreferrer">
            Website
          </a>
          \\{" "}
          <a href={props.card.github} target="_blank" rel="noreferrer">
            Github
          </a>
        </h3>
        <div className="tag-container" id={props.card.containerID}>
          {tagComponents}
        </div>
      </div>
    </div>
  );
}

export default Card;
