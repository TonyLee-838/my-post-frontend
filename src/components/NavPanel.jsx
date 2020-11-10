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

    width: "100%",
    height: "35vh",

    "& a": {
      cursor: "pointer",
      color: colors.white,
      fontFamily: "sans-serif",
      fontSize: "1.6rem",
      textDecoration: "none",
      padding: "15px 0px 15px 0px",
      marginLeft: "100px",
      transition: "color 0.15s ",
      "&:hover": {
        color: colors.lightBlue,
      },
    },
  },
});

export default NavPanel;
