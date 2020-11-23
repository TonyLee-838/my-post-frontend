import React from "react";
import { createUseStyles } from "react-jss";
import Icon from "./Icon";

function IconItem({
  icon,
  label,
  iconClassName,
  className,
  reverse = false,
  onClick,
}) {
  const classes = useStyle({ reverse });
  return (
    <div className={`${classes.container} ${className}`} onClick={onClick}>
      {icon && <Icon name={icon} className={iconClassName} />}
      <label className={classes.label}>{label}</label>
    </div>
  );
}

const useStyle = createUseStyles({
  container: ({ reverse }) => ({
    display: "flex",
    alignItems: "center",
    width: "min-content",
    flexDirection: `row${reverse ? "-reverse" : ""}`,
  }),
  label: {
    fontSize: "1.2rem",
  },
});

export default IconItem;
