import React from "react";
import { createUseStyles } from "react-jss";
import Icon from "./Icon";

function IconItem({
  icon,
  label,
  styles = { container: "", label: "", icon: "" },
  className,
}) {
  const classes = useStyle(styles);
  return (
    <div className={`${classes.container} ${className}`}>
      {icon && <Icon name={icon} styles={classes.icon} />}
      <label className={classes.label}>{label}</label>
    </div>
  );
}

const useStyle = createUseStyles({
  container: (styles) => ({
    display: "flex",
    alignItems: "center",
    width: "min-content",

    ...styles.container,
  }),
  label: (styles) => ({
    fontSize: "1.2rem",
    ...styles.label,
  }),
  icon: (styles) => styles.icon,
});

export default IconItem;
