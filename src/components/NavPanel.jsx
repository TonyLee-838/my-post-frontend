import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

import colors from "../config/color";
function NavPanel() {
  const classes = useStyle();
  return (
    <nav className={classes.container}>
      <Link to="/">Home</Link>
      <Link to="/learning-pieces">What I learnt today</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/projects">Projects</Link>
    </nav>
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
    opacity: "0.6",

    "& a": {
      color: colors.white,
    },
  },
});

export default NavPanel;
