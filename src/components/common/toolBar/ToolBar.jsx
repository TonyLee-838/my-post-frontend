import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import colors from "../../../config/color";
import IconItem from "../IconItem";
import SearchBox from "./SearchBox";

const ToolBar = ({ onSearch, notFound }) => {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyle({ isActive });

  return (
    <div className={classes.container}>
      <IconItem
        icon="MdKeyboardArrowLeft"
        className={classes.closeIcon}
        onClick={() => setIsActive(!isActive)}
      />

      {isActive && <SearchBox notFound={notFound} onTermsChange={onSearch} />}
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

  closeIcon: {
    cursor: "pointer",
    transition: "transform 500ms ease",
    transform: ({ isActive }) => `rotate(${isActive ? "180deg" : "0deg"})`,
    "& *": {
      color: colors.white,
    },
  },
});

export default ToolBar;
