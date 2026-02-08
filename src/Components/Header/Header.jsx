import "./Header.css";
import necktie from "../../Assets/Images/necktie.svg";
import shortcake from "../../Assets/Images/shortcake.svg";
import email from "../../Assets/Images/email.svg";
import laptop from "../../Assets/Images/laptop.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-text">
        <div className="header-title">
          <h1>Hey, I'm Alice!</h1>
        </div>
        <div className="header-links">
          <a
            href="https://drive.google.com/file/d/1T_tXuDMo129WKmUNMH19XFe9HhyGPYkF/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img src={shortcake} alt="" className="link-icon" />
            Resume
          </a>
          <a href="http://github.com/azhhng" target="_blank" rel="noreferrer">
            <img src={laptop} alt="" className="link-icon" />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/azhhng/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={necktie} alt="" className="link-icon" />
            LinkedIn
          </a>
          <a href="mailto:azhhng@gmail.com">
            <img src={email} alt="" className="link-icon" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
