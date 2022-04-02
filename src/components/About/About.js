import React from "react";
import "./About.scss";
import linkIcon from "../../images/links.svg";
import SOCIAL from "../../Content/social.json";

const Button = ({ label, href }) => {
  return (
    <a href={href} className="social__link">
      {label}
      <img src={linkIcon} alt="LinksTo" className="social__link__icon" />
    </a>
  );
};

const About = () => {
  return (
    <section className="about">
      <h1>Matteo Altamore</h1>
      <h3 className="about__subtitle">Web developer</h3>
      <p className="about__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
        repellendus quibusdam tempora provident facere doloremque libero cum
        sapiente earum corporis numquam culpa ipsam aperiam, et officia
        recusandae distinctio obcaecati velit? Ea blanditiis aliquid ad sed
        nisi. Exercitationem veritatis voluptate repellendus quasi ipsum culpa
        eveniet similique officiis expedita adipisci. Earum, iste.
      </p>
      <div className="social">
        {SOCIAL.data.map((btn) => {
          return <Button key={btn.label} {...btn} />;
        })}
      </div>
    </section>
  );
};

export default About;
