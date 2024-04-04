import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaYoutube,
  FaInstagram ,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy</h3>
          <p className="contact__description">
            Feel Free To get in touch with me. I am always open to discussing
            new projects, Creative idea or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
            </div>
            <span className="info__title">Mail me</span>
            <h4 className="info__desc">sathisha25082000@gmail.com</h4>
          </div>
          <div className="contact__info">
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
            </div>
            <span className="info__title">Call me</span>
            <h4 className="info__desc">+91 6382524059</h4>
          </div>
          <div className="contact__socials">
            <a
              href="https://github.com/sathish-25-A"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sathisha25082000" className="contact__social-link">
            <FaLinkedin />
            </a>
            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" className="contact__social-link">
            <FaInstagram />
            </a>
          </div>
        </div>
        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Name"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                className="form__control"
                placeholder="Your Email"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Subject"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>
          <button className="button">
            Send Message{" "}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
