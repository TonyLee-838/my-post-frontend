import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Icon from "./Icon";
import colors from "../../config/color";

const ScrollUpButton = () => {
  const [coordinateY, setCoordinateY] = useState(0);

  const classes = useStyle(coordinateY);

  window.onscroll = () => {
    setCoordinateY(window.scrollY);
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 1 });
  };
  return (
    <>
      <div className={classes.container} onClick={handleScrollUp}>
        <Icon name="MdArrowUpward" className={classes.icon} />
      </div>
    </>
  );
};

const useStyle = createUseStyles({
  container: {
    position: "fixed",
    bottom: "-100px",
    right: "35px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: colors.blue,

    opacity: "0.8",
    cursor: "pointer",
    transform: (coordinateY) =>
      coordinateY > 100 ? " translateY(-130px)" : "",

    transition: "transform 0.4s ease-in-out, opacity 0.2s ease",

    "&:hover": {
      opacity: 1,
    },
  },
  icon: {
    color: colors.white,
    fontSize: "2rem",
  },
});

export default ScrollUpButton;
