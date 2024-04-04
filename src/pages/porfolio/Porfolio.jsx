import React from "react";
import { portfolio } from "../../data";
import Portfolioitem from "../../components/Portfolioitem";
import './Portfolio.css'

const Porfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Project</span>
      </h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item)=>{
          return <Portfolioitem key={item.id} {...item} />
        })}
      </div>
    </section>
  );
};

export default Porfolio;
