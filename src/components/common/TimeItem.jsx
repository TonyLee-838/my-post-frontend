import React from "react";
import moment from "moment";
import { createUseStyles } from "react-jss";

import IconItem from "./IconItem";
import fontFamilies from "../../config/fontFamily";
import colors from "../../config/color";

const TimeItem = ({
  time,
  format = "MMM DD HH:mm",
  hideIcon = false,
  className,
  ...props
}) => {
  const classes = useStyle({ hideIcon });

  return (
    <IconItem
      {...props}
      // styles={styles(hideIcon)}
      className={`${classes.container} ${className} `}
      icon={hideIcon ? "" : "MdDateRange"}
      label={getTimeString(time, format)}
    />
  );
};

const getTimeString = (time, format) => {
  const date = new Date(
    typeof time === "string" ? Number.parseInt(time) : time
  );
  return moment(date).format(format);
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
