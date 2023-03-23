import "./navbar.css";
import Logo  from "../../assets/avanish8.jpeg";
import data from "./data";


function Navbar() {

    return (
        <nav id="navBar">
            <div className="container nav__container">
                <a href="index.html" className="nav__logo">
                    <img src={Logo} alt="Logo" />
                </a>
                <ul className="nav__menu">
                    {
                data.map((item)=>{
                    return (<li key={item.id}><a href={item.link}>{item.title}</a></li>)
                })
            }
                </ul>
                <button id="theme__icon"></button>
            </div>
        </nav>
    )
}

export default Navbar;