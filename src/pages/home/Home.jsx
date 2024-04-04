import React from "react";
import profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Sathish A</span>
            <br></br> Web Developer
          </h1>
          <p className="home__description">
            Welcome! I'm Sathish, a passionate and creative Front-End Developer
            eager to make a mark in the tech world and Proficient in HTML5, CSS3,
            JavaScript, React.Js, and Mongo DB. This portfolio serves as a window
            into my skills, projects, and journey as a budding developer. I
            craft visually stunning websites with seamless user experiences.
            Let's collaborate on projects that leverage cutting-edge
            technologies to create impactful digital solutions.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
