import React from "react";
import { createUseStyles } from "react-jss";

import IconItem from "./IconItem";
import fontFamilies from "../../config/fontFamily";
import colors from "../../config/color";
import getTimeString from "../../helper/getTimeString";

const TimeItem = ({
  time,
  format = "MMM DD HH:mm",
  hideIcon = false,
  className,
}) => {
  const classes = useStyle({ hideIcon });

  console.log("time,typeof time : ", time, typeof time);

  return (
    <IconItem
      className={`${classes.container} ${className} `}
      icon={hideIcon ? "" : "MdDateRange"}
      label={getTimeString(time, format)}
    />
  );
};

const useStyle = createUseStyles({
  container: {
    alignItems: "center",
    width: "max-content",

    "& *": {
      fontSize: "1.3rem",
      fontFamily: fontFamilies.text,
      color: colors.dark,
      marginLeft: ({ hideIcon }) => (hideIcon ? "" : "20px"),
    },
  },
});

export default TimeItem;
