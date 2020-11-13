import React from "react";
import { createUseStyles } from "react-jss";
import fontFamilies from "../config/fontFamily";
import Icon from "./Icon";

function IconItem({
  icon,
  label,
  styles = { container: "", label: "", icon: "" },
}) {
  const classes = useStyle(styles);
  return (
    <div className={classes.container}>
      <Icon name={icon} styles={classes.icon} />
      <label className={classes.label}>{label}</label>
    </div>
  );
}

const useStyle = createUseStyles({
  container: (styles) => ({
    display: "flex",
    ...styles.container,
  }),
  label: (styles) => ({
    fontSize: "1.2rem",
    fontFamily: fontFamilies.round,
    ...styles.label,
  }),
  icon: (styles) => styles.icon,
});

export default IconItem;
