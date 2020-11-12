import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Icon from "../common/Icon";
import colors from "../config/color";

const ScrollUpButton = () => {
  const [coordinateY, setCoordinateY] = useState(0);

  const classes = useStyle();

  window.onscroll = () => {
    setCoordinateY(window.scrollY);
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 1 });
  };
  return (
    <>
      {coordinateY > 100 && (
        <div className={classes.container} onClick={handleScrollUp}>
          <Icon name="MdArrowUpward" styles={classes.icon} />
        </div>
      )}
    </>
  );
};

const useStyle = createUseStyles({
  container: {
    position: "fixed",
    bottom: "35px",
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
    transition: "all 0.2s ease",
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
