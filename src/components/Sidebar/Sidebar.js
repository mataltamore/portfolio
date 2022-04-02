import React from "react";
import linkIcon from "../../images/links.svg";
import "./Sidebar.scss";

const Work = () => {
  return (
    <section className="cards">
      <div className="cards__box">
        <h3 className="cards__box__range">march 2021 - present</h3>
        <h3 className="cards__box__title">Deloitte Digital</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ab amet voluptatem, esse similique quia obcaecati cum, fugit placeat
          commodi tempora corporis iure perspiciatis quisquam quasi optio saepe
          veritatis repudiandae.
        </p>
      </div>
    </section>
  );
};

const SideProjects = () => {
  return (
    <section className="cards">
      <div className="cards__box">
        <h3 className="cards__box__range">march 2021 - present</h3>
        <h3 className="cards__box__title">Open source project #1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ab amet voluptatem, esse similique quia obcaecati cum, fugit placeat
          commodi tempora corporis iure perspiciatis quisquam quasi optio saepe
          veritatis repudiandae.
        </p>
        <a href="#github" className="cards__box__link">
          Github
          <img
            src={linkIcon}
            alt="LinksTo"
            className="cards__box__link__icon"
          />
        </a>
      </div>
      <div className="cards__box">
        <h3 className="cards__box__range">march 2021 - present</h3>
        <h3 className="cards__box__title">Open source project #2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ab amet voluptatem, esse similique quia obcaecati cum, fugit placeat
          commodi tempora corporis iure perspiciatis quisquam quasi optio saepe
          veritatis repudiandae.
        </p>
        <a href="#github" className="cards__box__link">
          Github
          <img
            src={linkIcon}
            alt="LinksTo"
            className="cards__box__link__icon"
          />
        </a>
      </div>
      <div className="cards__box">
        <h3 className="cards__box__range">march 2021 - present</h3>
        <h3 className="cards__box__title">Open source project #3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ab amet voluptatem, esse similique quia obcaecati cum, fugit placeat
          commodi tempora corporis iure perspiciatis quisquam quasi optio saepe
          veritatis repudiandae.
        </p>
        <a href="#github" className="cards__box__link">
          Github
          <img
            src={linkIcon}
            alt="LinksTo"
            className="cards__box__link__icon"
          />
        </a>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section className="cards">
      <div className="cards__box">
        <h3 className="cards__box__range">march 2021 - present</h3>
        <h3 className="cards__box__title">University of Milan</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ab amet voluptatem, esse similique quia obcaecati cum, fugit placeat
          commodi tempora corporis iure perspiciatis quisquam quasi optio saepe
          veritatis repudiandae.
        </p>
      </div>
    </section>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Work />
      <SideProjects />
      <Education />
    </aside>
  );
};

export default Sidebar;
