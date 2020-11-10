import React from "react";
import { createUseStyles } from "react-jss";
import { IconContext } from "react-icons";
import { MdDateRange } from "react-icons/md";
import moment from "moment";

const Time = ({ time, label }) => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <IconContext.Provider value={{ className: classes.icon }}>
        <MdDateRange />
      </IconContext.Provider>
      {/* <label className={classes.label}>{label}</label> */}
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
  icon: {
    fontSize: "2rem",
    margin: "0 10px 0 10px",
    paddingBottom: "5px",
  },
  time: {
    fontSize: "1.6rem",
    fontFamily: " 'Varela Round', sans-serif",
  },
});

export default Time;
