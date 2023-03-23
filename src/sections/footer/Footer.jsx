import "./footer.css";
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import { FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';


function Footer(){
    return (
        <footer id="footer">
            <a href="" className="footer__logo">AKB</a>

            <ul className="parmalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/profile.php?id=100025687598785" target="_blank"><BsFacebook/></a>
                <a href="https://www.instagram.com/avnish_at_1438/" target="_blank"><BsInstagram/></a>
                <a href="https://www.linkedin.com/in/avanish-kumar-bind-224a01201/" target="_blank"> <BsLinkedin/></a>
                <a href="https://github.com/Akb98443" target="_blank"> <FaGithubSquare /></a>


            </div>
            <div className="footer__copyright">
                <small>&copy; AKB All rights reserved</small>
            </div>
        </footer>
    
        )
}
export default Footer;