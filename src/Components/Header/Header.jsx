import { Link } from "react-router-dom";
import "./Header.css";

const links = [
  { label: "Resume", href: "https://drive.google.com/file/d/1T_tXuDMo129WKmUNMH19XFe9HhyGPYkF/view?usp=sharing" },
  { label: "GitHub", href: "https://github.com/azhhng" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/azhhng/" },
  { label: "Email", href: "mailto:azhhng@gmail.com" },
];

const Header = () => (
  <header className="header-container">
    <div className="header-text">
      <p className="header-kicker">Alice · Software engineer</p>
      <Link className="header-title" to="/" aria-label="Alice, home">
        <h1>Hey, I'm Alice<span className="title-mark">.</span></h1>
      </Link>
      <p className="header-intro">
        I'm a software engineer based in Toronto. I like making things, reading
        books, and hearing what other people are working on.
      </p>
      <nav className="header-links" aria-label="Connect with Alice">
        {links.map(({ label, href }) => (
          <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"}>
            {label}<span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
