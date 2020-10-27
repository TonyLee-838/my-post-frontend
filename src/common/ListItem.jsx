import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../config/color";

function ListItem({ icon, label, style = { container: "", label: "" } }) {
  const classes = useStyle(style);
  return (
    <div className={classes.container}>
      <h4 className={classes.label}>{label}</h4>
    </div>
  );
}

const useStyle = createUseStyles({
  container: (style) => ({
    cursor: "pointer",
    padding: "5px 0px 5px 0px",
    borderRadius: "2px",
    "&:hover": {
      backgroundColor: colors.black,
      transition: "background-color 0.3s ease",
    },
    ...style.container,
  }),
  label: (style) => ({
    transform: "translateX(1.5%)",
    margin: 0,

    ...style.label,
  }),
});

export default ListItem;
