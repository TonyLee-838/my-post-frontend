import React from "react";
import { createUseStyles } from "react-jss";
import moment from "moment";
import Icon from "../common/Icon";

const Time = ({ time }) => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Icon name="MdDateRange" />
      <label className={classes.time}>{getTimeString(time)}</label>
    </div>
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
  time: {
    fontSize: "1.6rem",
    fontFamily: " 'Varela Round', sans-serif",
  },
});

export default Time;
