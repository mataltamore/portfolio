import React from "react";
import "./About.scss";
import linkIcon from "../../images/links.svg";
import downloadIcon from "../../images/download.svg";
import resumePdf from "../../content/Matteo_Altamore_Resume.pdf";
import SOCIAL from "../../content/social.json";

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
      <h3 className="about__subtitle">Web Developer</h3>
      <p className="about__body">
        Hi, glad to see you here! I'm Matteo, an enthusiastic React Frontend
        Engineer and currently I'm working on a big project for Deloitte, but
        during my free time I love make useful libraries and websites about my
        hobbies and also read a lot of books and comics!
      </p>
      <div className="social">
        {SOCIAL.data.map((btn) => {
          return <Button key={btn.label} {...btn} />;
        })}
      </div>
      <a href={resumePdf} download className="resume">
        Get my CV
        <img src={downloadIcon} alt="DownloadCV" />
      </a>
    </section>
  );
};

export default About;
