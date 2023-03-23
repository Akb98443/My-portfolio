import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import {AiOutlineMessage} from "react-icons/ai";




function Contact() {

const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3otx3ae', 'template_8tdtef6', form.current, 'xlSdXWPJFsfuhaCRJ')
     
    e.target.reset();

  };

    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h3>Contact Me</h3>
            <p>Want to get in touch? shoot me a message using any of the options below</p>
            <div className="container contact__container">
                <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className="contact__option-icon"/>
                    <h4>Email</h4>
                    <h6>awanish3456@gmail.com</h6>
                    <a href="mailto:awanish3456@gmail.com" target="_blank">Send me Message</a>
                </article>

                <article className="contact__option">
                    <AiOutlineMessage className="contact__option-icon"/>
                    <h4>LinkDin Message</h4>
                    <h6>Avanish Kumar Bind</h6>
                    <a href="https://www.linkedin.com/in/avanish-kumar-bind-224a01201/" target="_blank">Send me Message</a>
                </article>

                <article className="contact__option">
                    <BsWhatsapp className="contact__option-icon"/>
                    <h4>Whatsapp</h4>
                    <h6>8726367265</h6>
                    <a href="https://api.whatsapp.com/send?phone=+918726367265" target="_blank">Send me Message</a>
                </article>
                </div>
                <form ref={form} onSubmit= {sendEmail}>
                    <input type="text" name="name" placeholder="Your full name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7"></textarea>
                    <button type="submit" className="btn primary">Send Message</button>
                </form>
            </div>
        </section>

    
        )
}
export default Contact;