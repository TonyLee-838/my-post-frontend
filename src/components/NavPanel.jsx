import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Icon from "../common/Icon";

import colors from "../config/color";
import fontFamilies from "../config/fontFamily";
function NavPanel() {
  const classes = useStyle();
  const links = [
    { label: "Home", path: "/", icon: "MdHome" },
    { label: "Learning Pieces", path: "/pieces", icon: "MdTimeline" },
    { label: "Posts", path: "/posts", icon: "MdLibraryBooks" },
    { label: "Projects", path: "/projects", icon: "MdDevices" },
  ];

  return (
    <nav className={classes.container}>
      {links.map((l) => (
        <div className={classes.link} key={l.label}>
          <Icon name={l.icon} styles={classes.icon} />
          <Link to={l.path}>{l.label}</Link>
        </div>
      ))}
    </nav>
  );
}

const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "15px",
  },
  link: {
    "& > a": {
      color: colors.white,
      fontFamily: fontFamilies.round,
      fontSize: "1.25rem",
      textDecoration: "none",
    },
    display: "flex",
    alignItems: "center",
    padding: "15px 0px 10px 0px",
    cursor: "pointer",
    marginLeft: "7%",
    marginRight: "7%",
    transition: "all 0.4s ease",
    "&:hover": {
      "& *": {
        color: colors.lightBlue,
      },
    },
  },
  icon: {
    color: colors.white,
    margin: "0px 15px 0px 15px",
  },
});

export default NavPanel;
