import React from "react";
import TextBold from "../../components/Text/TextBold";
import TextLight from "../../components/Text/TextLight";
import "./index.css";

const Error404 = () => {
  return (
    <div className="test">
      <div style={{ padding: "0 10px" }}>
        <TextBold text={"error"} size={"extra-big"} color={"#000"} />
      </div>
      <div>
        <TextLight text={"404 :)"} size={"extra-big"} color={"#000"} />
      </div>
    </div>
  );
};

export default Error404;
