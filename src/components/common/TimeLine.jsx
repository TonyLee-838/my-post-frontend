import React from "react";
import { createUseStyles } from "react-jss";

import TimeItem from "../common/TimeItem";
import colors from "../../config/color";

const TimeLine = ({
  time,
  leftFromParent = "1%",
  pinRadius = "120px",
  lineWidth = "3px",
  lineLength = "150%",
}) => {
  const classes = useStyle({
    leftFromParent,
    pinRadius,
    lineWidth,
    lineLength,
  });

  return (
    <>
      <div className={classes.timeLine}></div>
      <div className={classes.timePin}>
        <TimeItem
          time={time}
          format={"DD MMM"}
          className={classes.time}
          hideIcon
        />
      </div>
    </>
  );
};

const useStyle = createUseStyles({
  timePin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "-50px",
    left: ({ leftFromParent }) => leftFromParent,
    width: ({ pinRadius }) => pinRadius,
    height: ({ pinRadius }) => pinRadius,
    borderRadius: "50%",
    backgroundColor: colors.blue,
  },
  timeLine: {
    position: "absolute",
    left: ({ leftFromParent }) => leftFromParent,
    width: ({ lineWidth }) => lineWidth,
    height: ({ lineLength }) => `calc(${lineLength})`,
    transform: ({ pinRadius, lineWidth }) =>
      `translateX(calc((${pinRadius} - ${lineWidth}) / 2))`,
    backgroundColor: colors.blue,
  },
  time: {
    width: "50px",
    "& label": {
      color: colors.white,
      fontSize: "1.50rem",
      textAlign: "center",
    },
  },
});

export default TimeLine;
