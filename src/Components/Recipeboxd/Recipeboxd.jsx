import React, { useState } from "react";
import "./Recipeboxd.css";
import { Link } from "react-router-dom";

function Recipeboxd() {
  const [display, setDisplay] = useState("none");

  const toggle = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  return (
    <div className="project-container">
      <h2>
        Recipeboxd{" "}
        <span>(An homage to one of my favorite websites, Letterboxd).</span>
      </h2>
      <h3 className="links">
        <a
          href="https://recipeboxd.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>{" "}
        \\{" "}
        <a
          href="https://github.com/azhhng/online-recipe-book"
          target="_blank"
          rel="noreferrer"
        >
          Github - Frontend
        </a>{" "}
        \\{" "}
        <a
          href="https://github.com/azhhng/online-recipe-book-server"
          target="_blank"
          rel="noreferrer"
        >
          Github - Backend
        </a>
      </h3>
      <h3>
        I made Recipeboxd since I was tired of my bookmarks bar being full of
        recipes.
      </h3>
      <div
        className="reason-container"
        id="reason-container"
        onClick={() => toggle()}
      >
        <h3>
          Here are some features I am planning on adding: (click to expand or
          minimize)
        </h3>
      </div>
      <div
        className="explanation-container"
        id="explanation-container"
        style={{ display: display }}
      >
        <ul>
          <li>
            Integration with the Google Calendar API so you can schedule when to
            make a recipe.
          </li>
          <li>
            Creating a Google Chrome extension so users can easily add recipes
            to their recipe boxes from external websites without having to
            switch tabs.
          </li>
          <li>
            An explore page where users can browse other people's recipe boxes
            and recipes.
          </li>
          <li>
            Recommendations for users based on their stored recipes and recipe
            boxes.
          </li>
        </ul>
      </div>
      <div className="technologies-container">
        <h3>
          Frontend:{" "}
          <span className="technology">
            React.js, JavaScript, HTML & CSS, Sass, Auth0 SDK
          </span>
        </h3>
        <h3>
          Backend:{" "}
          <span className="technology">
            PostgreSQL, Express.js, Node.ts, Auth0, TypeScript, SQL
          </span>
        </h3>
        <h3>
          Deployment: <span className="technology">Vercel, Supabase</span>
        </h3>
      </div>
      <h3 className="next-link">
        <Link to="/spaceify">Next Project(Spaceify) --&gt;</Link>
      </h3>
    </div>
  );
}

export default Recipeboxd;
