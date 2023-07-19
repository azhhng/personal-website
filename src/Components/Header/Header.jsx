import "./Header.css";
import { Link } from "react-router-dom";
import Emoji from "../Emoji/Emoji";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <img
          src={require(`../../Assets/Images/profile.jpg`).default}
          alt="ponyo"
          width={"120px"}
          height={"120px"}
          id="profile-pic"
        />
        <h1>
          Hi, I'm Alice!
          <Emoji
            name={"flower"}
            width={25}
            height={25}
            style={{
              position: "relative",
              bottom: "-45px",
              right: "360px",
              backgroundColor: "#ffd7d4",
              border: "2px solid #ff8f87",
              padding: "7px",
              borderRadius: "50px",
            }}
          />
        </h1>
      </div>

      <h2>
        <Link to="/">Home</Link> \\{" "}
        <a
          href="https://drive.google.com/file/d/1T_tXuDMo129WKmUNMH19XFe9HhyGPYkF/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>{" "}
        \\{" "}
        <a href="http://github.com/azhhng" target="_blank" rel="noreferrer">
          Github
        </a>{" "}
        \\{" "}
        <a
          href="https://www.linkedin.com/in/azhhng/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        \\ <a href="mailto:mingg.zhang@mail.utoronto.ca">Email</a>
      </h2>
    </div>
  );
};

export default Header;
