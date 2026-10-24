import React from "react";
import "./HomePage.css";
import Card from "../../Components/Card/Card";
import WorkCard from "../../Components/WorkCard/WorkCard";
import projects from "../../Assets/Data/projects.json";
import workExperience from "../../Assets/Data/work_experience.json";

function HomePage() {
  return (
    <div className="home-container">
      <section className="home-section" aria-labelledby="about-heading">
        <h2 className="section-label" id="about-heading">01 / About</h2>
        <div className="section-content about-copy">
          <p>
            I'm a software engineer at HubSpot, where I work on platform solutions
            that help customers connect the tools they use every day.
          </p>
          <p>
            I studied computational cognition and computer science at the
            University of Toronto. I like work that brings careful engineering
            and curiosity about people together.
          </p>
        </div>
      </section>

      <section className="home-section" aria-labelledby="elsewhere-heading">
        <h2 className="section-label" id="elsewhere-heading">02 / Elsewhere</h2>
        <div className="section-content about-copy">
          <p>
            Outside of code, I love stories in every form: books, podcasts,
            films, and TV shows (especially reality TV). I'm often knitting
            while I watch.
          </p>
          <p className="elsewhere-links">
            <a href="https://letterboxd.com/azhhng/" target="_blank" rel="noreferrer">Films on Letterboxd ↗</a>
            <a href="https://www.goodreads.com/user/show/93869060-alice" target="_blank" rel="noreferrer">Books on Goodreads ↗</a>
          </p>
        </div>
      </section>

      <section className="home-section" aria-labelledby="experience-heading">
        <h2 className="section-label" id="experience-heading">03 / Experience</h2>
        <div className="section-content card-list">
          {workExperience.map((work) => <WorkCard key={work.id} card={work} />)}
        </div>
      </section>

      <section className="home-section" aria-labelledby="projects-heading">
        <h2 className="section-label" id="projects-heading">04 / Projects</h2>
        <div className="section-content card-list">
          {projects.map((project) => <Card key={project.id} card={project} />)}
        </div>
      </section>

    </div>
  );
}

export default HomePage;
