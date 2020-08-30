import React from "react";
import "./index.css";

const Owner = ({ src, width }) => {
  let size = width ? width : "50%";
  return (
    <div className="owner-main" style={{ width: size }}>
      <img src={src} />
    </div>
  );
};

export default Owner;
