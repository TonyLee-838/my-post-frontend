import React from "react";
import { createUseStyles } from "react-jss";
import moment from "moment";
import Icon from "../common/Icon";
import ListItem from "../common/ListItem";
import fontFamilies from "../config/fontFamily";

const Time = ({ time }) => {
  const classes = useStyle();

  return (
    <ListItem
      icon="MdDateRange"
      label={getTimeString(time)}
      styles={{
        container: { margin: "0 0 0 auto", width: "300px" },
        label: {
          fontSize: "1.6rem",
          fontFamily: fontFamilies.round,
        },
      }}
    />
  );
};

const getTimeString = (time) => {
  const date = new Date(time);
  return moment(date).format("MMM DD HH:mm");
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    width: "300px",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0 0 auto",
  },
  label: {
    fontSize: "1.6rem",
    fontFamily: " 'Varela Round', sans-serif",
  },
});

export default Time;
