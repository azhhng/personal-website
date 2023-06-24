import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h1> Hi, I'm Alice!</h1>
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
        \\ <a href="mailto:mingg.zhang@mail.utoronto.ca">Email</a>
      </h2>
    </div>
  );
};

export default Header;
