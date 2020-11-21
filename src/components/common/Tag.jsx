import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import Icon from "./Icon";

const Tag = ({ content, onDelete, className = "" }) => {
  const classes = useStyle();
  return (
    <span className={`${classes.container} ${className}`}>
      <label className={classes.content}>{content}</label>
      <span onClick={onDelete} className={classes.deleteIconContainer}>
        <Icon name="MdClear" className={classes.deleteIcon} />
      </span>
    </span>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "inline-flex",
    alignItems: "center",

    marginRight: "10px",
    padding: "5px 10px 5px 10px",

    height: "80%",
    backgroundColor: colors.white,
    border: "1.5px solid " + colors.lightBlue,
    borderRadius: "10px",
    "&:hover": {
      boxShadow: "0px 0px 2.5px " + colors.lightBlue,
    },
  },
  content: {
    fontFamily: fontFamilies.mono,
    flex: 1,
    marginRight: "10px",
  },
  deleteIconContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  deleteIcon: {
    pointerEvents: "all",
    fontSize: "0.8rem",
    "& path": {
      pointerEvents: "none",
    },
  },
});

export default Tag;
