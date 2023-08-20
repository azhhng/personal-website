import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SocialRobots.css";

function SocialRobots() {
  useEffect(() => {
    let box1 = document.getElementById("prompt-box1");

    box1.style.display = "block";
    box1.style.height = "1px";
    box1.style.height = box1.scrollHeight + "px";

    let userlen = box1.value.length;
    box1.focus();
    box1.setSelectionRange(userlen, userlen);

    document
      .getElementById("prompt-box1")
      .addEventListener("keydown", function (e) {
        if (e.key === "Backspace" || e.key === "Delete") {
          e.preventDefault();
        }
      });
  });

  return (
    <div className="project-container">
      <h2>Social Robots</h2>
      <div className="right-container">
        <h3>
          This project was made for PHL342: Mind and Machines. The instructor of
          the course allowed students to create an open-ended project that the
          public could view; I decided to create a web application.
        </h3>
      </div>
      <div className="left-container">
        <h3>
          Users will input their own name and create a robot of their own. In
          addition, they will have to make decisions that will alter the course
          of the game. There are three endings for the user to get.
        </h3>
      </div>
      <div className="technologies-container">
        <h3>
          Frontend:{" "}
          <span className="technology">React.js, Javascript, HTML & CSS</span>
        </h3>
        <h3>
          Backend:{" "}
          <span className="technology">Express.js, Node.js, Typescript</span>
        </h3>
      </div>
      <div className="slasher-robot">
        <h3>\\\\\\\\\\\\\\\\\\\</h3>
        <h3>
          \&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;\
        </h3>
        <h3>
          \&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
        </h3>
        <h3>\\\\\\\\\\\\\\\\\\\</h3>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</h3>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;\\\\\\\\\\\</h3>
        <h3>
          &nbsp;&nbsp;&nbsp;(\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\)
        </h3>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;\\\\\\\\\\\</h3>
        <h3>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </h3>
        <h3>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~~
        </h3>
      </div>
      <div className="dialogue-box">
        <h3>&gt; Hey, I'm Slash!</h3>
        <h3>
          &gt; Our website is a current work in progress after changes to
          Heroku. Stay tuned for our deployment!
        </h3>
        <h3>
          &gt; Or you can check out our{" "}
          <a href="http://github.com/azhhng/social-robots">Github</a>.
        </h3>
        <textarea
          className="NPC-box"
          id="prompt-box1"
          maxLength="1"
          spellCheck="false"
          defaultValue="> Have a good day!"
        ></textarea>
      </div>
      <h3 className="next-link">
        <Link to="/the-wormhole">Next Project(The Wormhole) --&gt;</Link>
      </h3>
    </div>
  );
}

export default SocialRobots;
