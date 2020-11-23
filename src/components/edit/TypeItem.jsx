import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import IconItem from "../common/IconItem";

const TypeItem = ({ icon, label, path }) => {
  const classes = useStyle();
  return (
    <Link key={`type-${label}`} to={path} className={classes.type}>
      <IconItem icon={icon} label={label} />
    </Link>
  );
};

const useStyle = createUseStyles({
  type: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",

    width: "100%",
    padding: "15px",
    marginBottom: "5px",

    textDecoration: "none",
    borderRadius: "5px",
    boxShadow: "3.5px 3.5px 2px" + colors.medium,
    cursor: "pointer",

    "& *": {
      cursor: "pointer",
    },

    "& label": {
      color: colors.black,
      textDecoration: "none",
      fontFamily: fontFamilies.round,
      cursor: "pointer",
      padding: "0px 20px 0px 20px",
    },
  },
});

export default TypeItem;
