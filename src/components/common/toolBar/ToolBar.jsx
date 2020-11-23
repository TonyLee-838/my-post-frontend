import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import colors from "../../../config/color";
import IconItem from "../IconItem";
import SearchBox from "./SearchBox";

const ToolBar = ({ terms, onSearch, onClear, notFound }) => {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyle({ isActive });

  return (
    <div className={classes.container}>
      <IconItem
        icon="MdKeyboardArrowLeft"
        className={classes.closeIcon}
        onClick={() => setIsActive(!isActive)}
      />

      {isActive && (
        <>
          <SearchBox
            terms={terms}
            notFound={notFound}
            onTermsChange={onSearch}
            onTermsClear={onClear}
          />
          <Link to="/edit">
            <IconItem icon="MdEdit" className={classes.editIcon} />
          </Link>
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
  editIcon: {
    cursor: "pointer",
    "& *": {
      color: colors.white,
    },
  },

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
