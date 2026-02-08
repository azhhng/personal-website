import React from "react";
import "./HomePage.css";
import Card from "../../Components/Card/Card";
import WorkCard from "../../Components/WorkCard/WorkCard";
import CardScroll from "../../Components/CardScroll/CardScroll";
import projects from "../../Assets/Data/projects.json";
import workExperience from "../../Assets/Data/work_experience.json";

function HomePage() {
  return (
    <div className="home-container">
      <div className="home-section">
        <p className="section-label">About</p>
        <h3>
          I am currently a backend software engineer at HubSpot working in the
          strategic integrations group. We handle all things related to the
          customer experience of any integrations/apps customers have installed.
        </h3>
        <h3>
          I attended the Univeristy of Toronto and graduated with an Honours
          Bachelor of Science, studying as a computational cognition major,
          minoring in computer science.
        </h3>
      </div>

      <div className="home-section">
        <p className="section-label">Experience</p>
        <CardScroll count={workExperience.length}>
          {workExperience.map((work) => (
            <WorkCard key={work.id} card={work} />
          ))}
        </CardScroll>
      </div>

      <div className="home-section">
        <p className="section-label">Interests</p>
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

      <div className="home-section">
        <p className="section-label">Projects</p>
        <CardScroll count={projects.length}>
          {projects.map((project) => (
            <Card key={project.id} card={project} />
          ))}
        </CardScroll>
      </div>
    </div>
  );
}

export default HomePage;
