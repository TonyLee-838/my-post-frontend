import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import colors from "../../../config/color";
import Icon from "../Icon";
import TextInput from "../TextInput";

const ToolBar = () => {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyle({ isActive });

  return (
    <div className={classes.container}>
      <div
        className={classes.closeIconContainer}
        onClick={() => setIsActive(!isActive)}
      >
        <Icon name="MdKeyboardArrowLeft" className={classes.closeIcon} />
      </div>

      {isActive && (
        <>
          <TextInput className={classes.searchField} />
          <Icon name="MdSearch" className={classes.searchIcon} />
        </>
      )}
    </div>
  );
};

const useStyle = createUseStyles({
  container: ({ isActive }) => ({
    zIndex: "2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "15px",
    height: "60px",
    borderRadius: "30px",
    opacity: 0.3,
    transition: "right 350ms ease ,opacity 350ms ease,width 500ms ease",
    cursor: "pointer",

    right: "-30px",
    width: "60px",
    backgroundColor: colors.dark,

    "&:hover": {
      opacity: 1,
      right: "10px",
    },

    ...(isActive
      ? {
          right: "10px",
          width: "460px",
          backgroundColor: colors.dark,
          justifyContent: "start",
          opacity: 1,
          "&:hover": null,
          cursor: "auto",
        }
      : null),
  }),

  searchIcon: {
    color: colors.white,
  },
  closeIcon: {
    color: colors.white,
    cursor: "pointer",
    transition: "transform 500ms ease",
    transform: ({ isActive }) => `rotate(${isActive ? "180deg" : "0deg"})`,
  },
  closeIconContainer: {
    display: "flex",
  },

  searchField: {
    backgroundColor: colors.medium,
    margin: "0px 20px 0px 15px",
    width: "60%",
  },
});

export default ToolBar;
