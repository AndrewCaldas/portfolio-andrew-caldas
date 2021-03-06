import React from "react";
import TextBold from "../../Text/TextBold";
import TextLight from "../../Text/TextLight";
import "./index.css";

const SmallCard = ({ objectId, title, description, img, _onClick }) => {
  return (
    <div
      className="small-card-main"
      objectId={"small-card-" + objectId ? objectId : ""}
      onClick={_onClick}
    >
      <img src={img} alt="img-card" />
      <span className="text">
        <TextBold text={title} color="#fff" size="medium" />
        <TextLight text={description} color="#fff" size="small" />
      </span>
    </div>
  );
};

export default SmallCard;
