import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

import colors from "../config/color";
function NavPanel() {
  const classes = useStyle();
  return (
    <nav className={classes.container}>
      <Link to="/">Home</Link>
      <Link to="/pieces">Learning Pieces</Link>
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
    alignItems: "center",

    width: "100%",
    height: "35vh",

    "& a": {
      color: colors.white,
      fontFamily: "sans-serif",
      fontSize: "1.7rem",
      textDecoration: "none",
      margin: "15px 0px 15px 0px",
    },
  },
});

export default NavPanel;
