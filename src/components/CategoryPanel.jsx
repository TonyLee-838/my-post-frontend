import React from "react";
import { createUseStyles } from "react-jss";
import Separator from "../common/Separator";
import colors from "../config/color";

function CategoryPanel() {
  const classes = useStyles();
  const categories = [
    { id: "c1", label: "HTML", color: "#fd3f5f", icon: "SiHtml5" },
    { id: "c2", label: "CSS", color: "#116efd", icon: "SiCss3" },
    { id: "c3", label: "JavaScript", color: "#fdcf1f", icon: "SiJavascript" },
    { id: "c4", label: "React", color: "#61dafb", icon: "SiReact" },
    { id: "c5", label: "Node.js", color: "#8ac773", icon: "SiNodeDotJs" },
    { id: "c6", label: "MySQL", color: "#1583b8", icon: "SiMysql" },
    { id: "c7", label: "Git", color: "#f1f1f1", icon: "SiGit" },
  ];

  return (
    <>
      <h3 className={classes.heading}>Categories</h3>
      <Separator color={colors.white} />
      <div className={classes.container}>
        {categories.map((c) => (
          <div
            className={classes.category}
            style={{ color: c.color }}
            key={c.id}
          >
            <label href="#">{"#" + c.label}</label>
          </div>
        ))}
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
  },
  category: {
    borderRadius: "15px",
    fontFamily: "Ubuntu,sans-serif",
    fontSize: "1.35rem",
    padding: "15px 10px 15px 10px",
    textAlign: "center",
    transition: "background-color 0.1s ease 0s",
    width: "150px",

    "&:hover": {
      backgroundColor: colors.blue,
      "& *": {
        cursor: "pointer",
      },
    },
  },
  heading: {
    color: colors.white,
    fontFamily: " 'Patua One', sans-serif",
    fontSize: "2rem",
    textAlign: "center",
    margin: 0,
    marginBottom: "10px",
  },
});

export default CategoryPanel;
