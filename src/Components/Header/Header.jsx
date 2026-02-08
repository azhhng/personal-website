import "./Header.css";

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
