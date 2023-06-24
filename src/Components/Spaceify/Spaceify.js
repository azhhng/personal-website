import React from "react";
import "./Spaceify.css";
import { Link } from "react-router-dom";

function Spaceify() {
  return (
    <div className="project-container">
      <h2>Spaceify</h2>
      <h3 className="links">
        <a
          href="https://spaceify.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>{" "}
        \\{" "}
        <a
          href="http://github.com/azhhng/spaceify"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </h3>
      <h3>
        This web app was created using NASA's API to display astronomy photos. I
        had a lot of fun making the design of the website, and quite obviously
        based the photo containers on planets.
      </h3>
      <h3>
        The website also features a pick-and-match game where you match a photo
        of a planet with its correct name. The photos are picked through a
        randomizer algorithm so every game you play is unique, making it more
        fun!
      </h3>
      <div className="technologies-container">
        <h3>
          Frontend:{" "}
          <span className="technology">
            React.js, Javascript, HTML & CSS, NASA API
          </span>
        </h3>
      </div>
      <h3 className="next-link">
        <Link to="/recipeboxd">Next Project(Recipeboxd) --&gt;</Link>
      </h3>
    </div>
  );
}

export default Spaceify;
