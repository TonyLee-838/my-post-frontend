import React from "react";
import { createUseStyles } from "react-jss";
import * as MaterialIcons from "react-icons/md";
import * as SimpleIcons from "react-icons/si";
import colors from "../config/color";

const Icon = ({ name, styles = "" }) => {
  const classes = useStyle(styles);
  const IconComponent = name.startsWith("Md")
    ? MaterialIcons[name]
    : SimpleIcons[name];
  return <IconComponent className={`${classes.icon} ${styles}`} />;
};

const useStyle = createUseStyles({
  icon: {
    color: colors.black,
    fontSize: "1.5rem",
  },
});

export default Icon;
