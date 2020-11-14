import React from "react";
import moment from "moment";
import fontFamilies from "../config/fontFamily";
import IconItem from "../common/IconItem";
import colors from "../config/color";

const TimeItem = ({ time, ...props }) => {
  return (
    <IconItem
      {...props}
      icon="MdDateRange"
      label={getTimeString(time)}
      styles={styles}
    />
  );
};

const getTimeString = (time) => {
  const date = new Date(time);
  return moment(date).format("MMM DD HH:mm");
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
