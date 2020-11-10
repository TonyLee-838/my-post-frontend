import React from "react";
import { createUseStyles } from "react-jss";
import * as MaterialIcons from "react-icons/md";
import * as SimpleIcons from "react-icons/si";
import colors from "../config/color";

const Icon = ({ name, ...props }) => {
  const classes = useStyle(props);
  const Icon = name.startsWith("Md") ? MaterialIcons[name] : SimpleIcons[name];
  return <Icon className={classes.icon} />;
};

const useStyle = createUseStyles({
  icon: (props) => ({
    margin: "0 10px 0 10px",
    paddingBottom: "5px",
    color: props.color ? props.color : colors.black,
    fontSize: props.fontSize ? props.fontSize : "2rem",
  }),
});

export default Icon;
