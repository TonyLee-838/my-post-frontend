import React from "react";
import moment from "moment";
import fontFamilies from "../../config/fontFamily";
import IconItem from "./IconItem";
import colors from "../../config/color";

const TimeItem = ({ time, format = "MMM DD HH:mm", ...props }) => {
  const getTimeString = (time) => {
    const date = new Date(time);
    return moment(date).format(format);
  };

  return (
    <IconItem
      icon="MdDateRange"
      label={getTimeString(time)}
      styles={styles}
      {...props}
    />
  );
};

const styles = {
  container: {
    alignItems: "center",
    width: "max-content",
  },
  label: {
    fontSize: "1.15rem",
    fontFamily: fontFamilies.text,
    color: colors.dark,
    marginLeft: "20px",
  },
};

export default TimeItem;
