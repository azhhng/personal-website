import React from "react";
import "./HomePage.css";
import Card from "../../Components/Card/Card";
import Emoji from "../../Components/Emoji/Emoji";
import projects from "../../Assets/Data/projects.json";
import Dropdown from "../../Components/Dropdown/Dropdown";

function HomePage() {
  return (
    <div className="home-container">
      <Dropdown />
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
