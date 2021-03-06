import React from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

const Cards = ({
  objectId,
  rowIndex,
  title,
  description,
  date,
  img,
  type,
  _onClick
}) => {
  return (
    <div>
      {type && (
        <span>
          {type === "big" ? (
            <BigCard
              objectId={objectId}
              rowIndex={rowIndex}
              title={title}
              description={description}
              date={date}
              img={img}
              _onClick={_onClick}
            />
          ) : type === "small" ? (
            <SmallCard
              objectId={objectId}
              title={title}
              description={description}
              img={img}
              _onClick={_onClick}
            />
          ) : (
                <span></span>
              )}
        </span>
      )}
    </div>
  );
};

export default Cards;
