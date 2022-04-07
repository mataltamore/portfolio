import React from "react";
import linkIcon from "../../images/links.svg";
import "./Sidebar.scss";
import CV from "../../content/cv.json";

const Card = ({ data }) => {
  return (
    <section className="cards">
      {data.map((item) => {
        return (
          <Box {...item}>{item.site ? <Button site={item.site} /> : null}</Box>
        );
      })}
    </section>
  );
};

const Box = (props) => {
  const { range, name, description } = props;
  return (
    <div className="box">
      <h3 className="box__range">{range}</h3>
      <h3 className="box__title">{name}</h3>
      <p>{description}</p>
      {props.children}
    </div>
  );
};

const Button = ({ site }) => {
  return (
    <a href={site.link} className="link">
      <div className="link__wrapper">
        {site.name}
        <img src={linkIcon} alt="LinksTo" className="link__wrapper__icon" />
      </div>
    </a>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {CV.data.map((array) => {
        return <Card data={array} />;
      })}
    </aside>
  );
};

export default Sidebar;
