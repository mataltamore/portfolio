import React from "react";
import linkIcon from "../../images/links.svg";
import "./Sidebar.scss";

const CV = [
  [
    {
      range: "may 2021 - present",
      name: "Deloitte Digital",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab amet voluptatem, esse similique quia obcaecati cum, fugit placeat commodi tempora corporis iure perspiciatis quisquam quasi optio saepe veritatis repudiandae.",
    },
  ],
  [
    {
      range: "may 2021 - present",
      name: "name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab amet voluptatem, esse similique quia obcaecati cum, fugit placeat commodi tempora corporis iure perspiciatis quisquam quasi optio saepe veritatis repudiandae.",
      site: {
        name: "Github",
        link: "#github1",
      },
    },
    {
      range: "may 2021 - present",
      name: "name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab amet voluptatem, esse similique quia obcaecati cum, fugit placeat commodi tempora corporis iure perspiciatis quisquam quasi optio saepe veritatis repudiandae.",
      site: {
        name: "Github",
        link: "#github2",
      },
    },
    {
      range: "may 2021 - present",
      name: "name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab amet voluptatem, esse similique quia obcaecati cum, fugit placeat commodi tempora corporis iure perspiciatis quisquam quasi optio saepe veritatis repudiandae.",
      site: {
        name: "Github",
        link: "#github3",
      },
    },
  ],
  [
    {
      range: "sept 2016 - apr 2021",
      name: "University of Milan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab amet voluptatem, esse similique quia obcaecati cum, fugit placeat commodi tempora corporis iure perspiciatis quisquam quasi optio saepe veritatis repudiandae.",
    },
  ],
];

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
    <div className="cards__box">
      <h3 className="cards__box__range">{range}</h3>
      <h3 className="cards__box__title">{name}</h3>
      <p>{description}</p>
      {props.children}
    </div>
  );
};

const Button = ({ site }) => {
  return (
    <a href={site.link} className="cards__box__link">
      {site.name}
      <img src={linkIcon} alt="LinksTo" className="cards__box__link__icon" />
    </a>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {CV.map((array) => {
        return <Card data={array} />;
      })}
    </aside>
  );
};

export default Sidebar;
