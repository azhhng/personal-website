import React from "react";
import "./HomePage.css";
import Card from "../../Components/Card/Card";
import Emoji from "../../Components/Emoji/Emoji";
import projects from "../../Assets/Data/projects.json";

function HomePage() {
  return (
    <div className="home-container">
      <div>
        <h3>
          I am currently a backend software engineer at HubSpot working in the
          strategic integrations group. We handle all things related to the
          customer experience of any integrations/apps customers have installed.
        </h3>
        <div className="text-emoji">
          <h3>
            I attended the Univeristy of Toronto and graduated with an Honours
            Bachelor of Science, studying as a computational cognition major,
            minoring in computer science.
          </h3>
        </div>
      </div>
      <div>
        <h3>
          I love watching TV shows, movies and reading books. Some of my
          favorite TV shows are: The X-Files, The OA, The Haunting of Hill
          House. You can check out my favorite movies at{" "}
          <a
            className="link-yellow"
            href="https://letterboxd.com/azhhng/"
            target="_blank"
            rel="noreferrer"
          >
            Letterboxd
          </a>{" "}
          and my favorite books at{" "}
          <a
            className="link-yellow"
            href="https://www.goodreads.com/user/show/93869060-alice"
            target="_blank"
            rel="noreferrer"
          >
            Goodreads
          </a>
          .
        </h3>
      </div>
      <div>
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
