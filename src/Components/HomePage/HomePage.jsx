import React, { useState } from "react";
import "./HomePage.css";
import Card from "../Card/Card";
import Emoji from "../Emoji/Emoji";

function HomePage() {
  const [projects] = useState([
    {
      id: 4,
      title: "Recipeboxd",
      containerID: "recipe-box-container",
      description:
        "An online recipe book! Organize and store online recipe links.",
      github: "https://github.com/azhhng/online-recipe-book-server",
      website: "https://recipeboxd.vercel.app/",
      tags: "PostgreSQL,React.js,Express.js,Node.ts,TypeScript",
      emoji: "bento_box",
    },
    {
      id: 2,
      title: "Spaceify",
      containerID: "spaceify-container",
      description:
        "A gallery showcasing NASA's astronomy photos (plus an ever-changing pick-and-match game).",
      github: "https://github.com/azhhng/spaceify",
      website: "https://spaceify.netlify.com/",
      tags: "React.js,NASA API",
      emoji: "ringed_planet",
    },
  ]);

  return (
    <div className="home-container">
      <div className="right-container">
        <h3>
          I am currently attending the Univeristy of Toronto as a computational
          cognition major, minoring in computer science.
        </h3>
        <div className="text-emoji">
          <h3>I am an aspiring back-end software engineer</h3>
          <Emoji
            name={"smiling_face_with_smiling_eyes"}
            width={25}
            height={25}
          />
          <h3>.</h3>
        </div>
      </div>
      <div className="left-container">
        <h3>
          I love watching TV shows, movies and reading books. Some of my
          favorite TV shows are: Succession, The OA, The Haunting of Hill House.
          You can check out my favorite movies at{" "}
          <a
            href="https://letterboxd.com/azhhng/"
            target="_blank"
            rel="noreferrer"
          >
            Letterboxd
          </a>{" "}
          and my favorite books at{" "}
          <a
            href="https://www.goodreads.com/user/show/93869060-alice"
            target="_blank"
            rel="noreferrer"
          >
            Goodreads
          </a>
          .
        </h3>
      </div>
      <div className="right-container">
        <h3>
          I also enjoy developing web applications in my spare time. You can see
          some of them below.
        </h3>
        {projects.map((project) => (
          <Card key={project.id} card={project} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
