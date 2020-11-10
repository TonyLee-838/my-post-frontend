import React from "react";
import { createUseStyles } from "react-jss";
import List from "../common/List";
import Panel from "../common/Panel";
import colors from "../config/color";

function CategoryPanel() {
  const classes = useStyles();
  const categories = [
    { id: "c1", label: "HTML", color: "#fd3f5f" },
    { id: "c2", label: "CSS", color: "#116efd" },
    { id: "c3", label: "JavaScript", color: "#fdcf1f" },
    { id: "c4", label: "React", color: "#1fcffd" },
  ];

  return (
    <div className={classes.container}>
      {categories.map((c) => (
        <div className={classes.category} style={{ color: c.color }} key={c.id}>
          <label>{"#" + c.label}</label>
        </div>
      ))}
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
  },
  category: {
    textAlign: "center",
    fontSize: "1.2rem",
    padding: "15px 10px 15px 10px",
    width: "150px",
    borderRadius: "15px",
    transition: "background-color 0.05s ease 0s",
    "&:hover": {
      backgroundColor: colors.blue,
    },
  },
});

export default CategoryPanel;
