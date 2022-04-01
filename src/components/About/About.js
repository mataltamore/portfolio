import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <h1>Matteo Altamore</h1>
      <h3 className="about__subtitle">Fullstack web developer</h3>
      <p className="about__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
        repellendus quibusdam tempora provident facere doloremque libero cum
        sapiente earum corporis numquam culpa ipsam aperiam, et officia
        recusandae distinctio obcaecati velit? Ea blanditiis aliquid ad sed
        nisi. Exercitationem veritatis voluptate repellendus quasi ipsum culpa
        eveniet similique officiis expedita adipisci. Earum, iste.
      </p>
      <div>
        <a href="#linkedin">Linkedin</a>
        <a href="#github">Github</a>
      </div>
    </section>
  );
};

export default About;
