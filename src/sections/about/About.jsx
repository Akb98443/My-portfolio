import "./about.css";
import AboutImage from "../../assets/avanish2.jpeg";
import CV from "../../assets/MyCvNew.pdf";
import {BiDownload} from "react-icons/bi";
import Card from "../../components/Card";
import data from "./data.js"




function About() {

    return (
        <section id="about">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                    <img src={AboutImage} alt="about image" />
                    </div>
                
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards"> 
                    {
                        data.map(item =>(
                            <Card key={item.id} className="about__card">
                            <span className="about__card-icon">{item.icon}</span>
                            <h5>{item.title}</h5>
                            <small>{item.desc}</small>
                             </Card>
                            
                        ))
                    }
                    </div>
                        <p>
                        My name is Avanish Kumar. I am a third year undergraduate student
                         at Lovely Professional Univesity ,Jalandhar,Punjab.  I was born and raised in UP.

                        </p>
                        <p>
                        On my way, I have learnt a range of Programming Languages such as C, C++, JavaScript. I have also developed 
                        some Js based projects same can be found in PORTFOLIO section .
                        </p>
                        <a href={CV} download className="btn primary"> Download CV <BiDownload/></a>
                </div>
            </div>
        </section>
    )

}
export default About;