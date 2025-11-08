import "./Portfolio.css";
import { portfolioData } from "../../components/data/portfolioData";
import Title from "../Title/Title";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container flex-center">
        <Title title="Portfolio" subtitle="Portfolio" />
        <div className="portfolio__inner">
          {portfolioData.map((item) => {
            return <PortfolioItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
