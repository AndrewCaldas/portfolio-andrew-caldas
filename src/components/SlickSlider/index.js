import React from "react";
import Slider from "react-slick";
import "./index.css";
import PlaceHolder from "../../assets/img/placeholder-image.png";
import TextBold from "../../components/Text/TextBold";
import TextLight from "../../components/Text/TextLight";

const SlickSlider = ({ title, description, list, state, mask }) => {
  let status = state ? state : "white";

  let haveMask = mask ? "rgba(103, 71, 199, 0.85)" : "transparent";

  let colortext = status === "dark" ? "#1b262c" : "#f4f6ff";

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    adaptiveHeight: false,
    arrows: false
  };
  return (
    <div>
      <span style={{ backgroundColor: haveMask }} className="mask-slick">
        <span className="text-main">
          <TextBold
            text={title ? title : ""}
            color={colortext}
            size={"extra-big"}
          />
          <TextLight
            text={description ? description : ""}
            color={colortext}
            size={"big"}
          />
        </span>
      </span>
      <Slider {...settings}>
        {list &&
          list.map((item, index) => (
            <div key={index} className="box-img">
              <img id={item.id} src={item.img ? item.img : PlaceHolder} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
