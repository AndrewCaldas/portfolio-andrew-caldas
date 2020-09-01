import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import TextBold from "../Text/TextBold";
import TextLight from "../Text/TextLight";
import "./index.css";
// import WorkIcon from "../../assets/img/img-1.jpeg";

const Timeline = ({ title, timeline }) => {
  return (
    <div className="timeline-main">
      <div className="title">
        <TextBold text={title} size="big" color="rgba(103, 71, 199, 1)" />
      </div>

      {timeline && (
        <VerticalTimeline>
          {timeline.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(103, 71, 199, 1)",
                color: "#000"
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgba(103, 71, 199, 1)"
              }}
              date={
                <TextLight
                  text={item.dateInitial + " - " + item.dateEnd}
                  color={"#fff"}
                  size="small"
                />
              }
              iconStyle={{ background: "rgba(103, 71, 199, 1)", color: "#000" }}
              // icon={<WorkIcon />}
            >
              <TextBold text={item.name} color={"#FFF"} size="medium" />
              <div>
                <TextLight
                  text={item.description}
                  color={"#FFF"}
                  size="small"
                />
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      )}
    </div>
  );
};

export default Timeline;
