import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { reactPortfolio, mernPortfolio, designPortfolio } from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "react",
      title: "React",
    },
    {
      id: "mern",
      title: "MERN Stack",
    },
    {
      id: "design",
      title: "Design",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(reactPortfolio);
        break;
      case "mern":
        setData(mernPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;

      default:
        setData(reactPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={`${d.url}`} target="_blank" rel="noreferrer">
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
