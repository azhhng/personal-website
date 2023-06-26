import "./Card.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  var link = "/" + String(props.card.title).replace(/ /g, "-").toLowerCase();
  var tags = String(props.card.tags).split(",");

  useEffect(() => {
    let tagsList = document.getElementById([props.card.containerID]);

    for (let i = 0; i < tags.length; i++) {
      let tag = document.createElement("div");
      tag.setAttribute("class", "tag");
      tag.textContent = tags[i];

      tagsList.appendChild(tag);
    }
  });

  return (
    <div className="card">
      <div className="container">
        <h3 className="card-title">{props.card.title}</h3>
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
        <div className="tag-container" id={props.card.containerID}></div>
      </div>
    </div>
  );
}

export default Card;
