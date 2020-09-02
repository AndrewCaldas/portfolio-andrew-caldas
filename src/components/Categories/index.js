import React from "react";
import Cards from "../Cards";
import TextBold from "../Text/TextBold";
import "./index.css";

const Categories = ({ objectId, title, categories }) => {
  return (
    <div id={"categorie-" + objectId} className="categorie-main">
      <div className="title">
        <TextBold text={title} size="big" color="rgba(103, 71, 199, 1)" />
      </div>
      <div className="list">
        {categories &&
          categories.map((card, index) => (
            <span key={index}>
              <Cards
                objectId={card.id}
                title={card.name}
                description={card.description}
                img={card.img}
                type={"small"}
              />
            </span>
          ))}
      </div>
    </div>
  );
};

export default Categories;
