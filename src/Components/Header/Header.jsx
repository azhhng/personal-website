import "./Header.css";
import { Link } from "react-router-dom";
import Emoji from "../Emoji/Emoji";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-picture">
        <img
          src={require(`../../Assets/Images/profile.jpg`)}
          alt="ponyo"
          width={"120px"}
          height={"120px"}
          id="profile-pic"
        />
        <Emoji
          name={"flower"}
          width={25}
          height={25}
          style={{
            position: "relative",
            bottom: "-0px",
            right: "40px",
            backgroundColor: "#ffd7d4",
            border: "2px solid #ff8f87",
            padding: "7px",
            borderRadius: "50px",
          }}
        />
      </div>

      <div className="header-text">
        <div className="header-title">
          <h1>Hi, I'm Alice!</h1>
        </div>
        <div className="header-links">
          <Link to="/">Home</Link>
          <a
            href="https://drive.google.com/file/d/1T_tXuDMo129WKmUNMH19XFe9HhyGPYkF/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a href="http://github.com/azhhng" target="_blank" rel="noreferrer">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/azhhng/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:azhhng@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
