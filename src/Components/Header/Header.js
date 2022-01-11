import './Header.css';

const Header = () => {

    const toHome = () => {
        window.location.href = "/";
    }

    return (
        <div className="header-container">
            <h1 onClick={() => toHome()}> Hi, I'm Alice Zhang!</h1>
            <h2><a href="/">Home</a> \\ <a href="https://drive.google.com/file/d/1T_tXuDMo129WKmUNMH19XFe9HhyGPYkF/view?usp=sharing">Resume</a> \\ <a href="http://github.com/azhhng">Github</a> \\ <a href="mailto:mingg.zhang@mail.utoronto.ca">Email</a></h2>
        </div>
    )
}

export default Header