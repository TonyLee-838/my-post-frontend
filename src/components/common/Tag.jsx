import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import Icon from "./Icon";

const Tag = ({ content, onDelete }) => {
  const classes = useStyle();
  return (
    <span className={classes.container} onClick={onDelete}>
      <label className={classes.content}>{content}</label>
      <Icon name="MdClear" className={classes.deleteIcon} />
    </span>
  );
};

const useStyle = createUseStyles({
  container: {
    alignItems: "center",
    height: "80%",
    marginRight: "10px",
    backgroundColor: colors.white,
    padding: "5px 30px 5px 5px",
    border: "1.5px solid " + colors.lightBlue,
    borderRadius: "12px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 0px 2.5px " + colors.lightBlue,
    },
  },
  deleteIcon: {
    pointerEvents: "fill",
    position: "relative",
    top: "2px",
    right: "-20px",
    fontSize: "0.8rem",
  },
});

export default Tag;
