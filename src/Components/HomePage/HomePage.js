import React, { useState } from "react";
import "./HomePage.css";
import Card from "../Card/Card";

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
      tags: "PostgreSQL,React.js,Express.js, Node.js,Typescript",
    },
    {
      id: 2,
      title: "Spaceify",
      containerID: "spaceify-container",
      description:
        "A gallery showcasing NASA's astronomy photos (plus an ever-changing pick-and-match game).",
      github: "https://github.com/azhhng/spaceify",
      website: "https://spaceify.herokuapp.com/",
      tags: "React.js, NASA API",
    },
  ]);

  return (
    <div className="home-container">
      <div className="right-container">
        <h3>
          I am currently attending the Univeristy of Toronto as a cognitive
          science major with minors in computer science and statistics.
        </h3>
        <h3>I am an aspiring full stack engineer :).</h3>
      </div>
      <div className="left-container">
        <h3>I am a lover of all types of media.</h3>
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
