import React, { useState } from "react";
import "./HomePage.css";
import Card from "../Card/Card";

function HomePage() {
  const [projects] = useState([
    {
      id: 1,
      title: "Social Robots",
      containerID: "social-robot-container",
      description:
        "An interactive game that teaches users about robot morality.",
      github: "https://github.com/azhhng/social-robots",
      website: "https://socialrobots.netlify.app/",
      tags: "Express.js,React.js,Node.js",
    },
    {
      id: 2,
      title: "The Wormhole",
      containerID: "wormhole-container",
      description: "A web app to rate, review, and catalogue your books.",
      github: "https://github.com/azhhng/the-wormhole",
      website: "https://thewormhole.netlify.app/",
      tags: "PostgreSQL,Express.js,React.js,Node.js,Google Books API",
    },
    {
      id: 3,
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
          <a href="https://letterboxd.com/azhhng/">Letterboxd</a> and my
          favorite books at{" "}
          <a href="https://www.goodreads.com/user/show/93869060-alice">
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
