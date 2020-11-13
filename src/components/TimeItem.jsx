import React from "react";
import moment from "moment";
import fontFamilies from "../config/fontFamily";
import IconItem from "../common/IconItem";

const TimeItem = ({ time }) => {
  return (
    <IconItem icon="MdDateRange" label={getTimeString(time)} styles={styles} />
  );
};

const getTimeString = (time) => {
  const date = new Date(time);
  return moment(date).format("MMM DD HH:mm");
};

const styles = {
  container: {
    display: "flex",
    width: "300px",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0 0 auto",
  },
  label: {
    fontSize: "1.6rem",
    fontFamily: fontFamilies.round,
  },
};

export default TimeItem;
