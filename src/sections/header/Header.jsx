import "./header.css";
import HeaderImage from "../../assets/header.png";
import data from "./data";

function Header(){
    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__profile">
                    <img src={HeaderImage} alt="Header Profile" />
                </div>
                <h2>Hi I'm Avanish Kumar Bind</h2>
                <p>A <strong>MERN STACK</strong> developer, geek and curious human and passionate about programming and design.</p>
                <div className="header__cta">
                    <a href="#contact" className="btn primary">Get in touch </a>
                    <a href="#portfolio" className="btn">My Works</a>
                </div>
                <div className="header__socials">
                    {
                        data.map(item => <a key={item.id} href = {item.link} target="_blank" rel="noopener noreferre"> {item.icon}</a>)
                    }
                </div>
            </div>
        </header>
    )
}
export default Header;