import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../config/color";
function NavPanel() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <a href="#">Home</a>
      <a href="#">What I learnt today</a>
      <a href="#">Blogs</a>
      <a href="#">Projects</a>
    </div>
  );
}

const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: "",
    justifyContent: "space-around",

    alignItems: "center",
    width: "300px",
    height: "35vh",
    backgroundColor: colors.secondary,

    "& a": {
      color: colors.white,
    },
  },
});

export default NavPanel;
