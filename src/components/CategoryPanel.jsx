import React from "react";
import { createUseStyles } from "react-jss";
import Separator from "../common/Separator";
import colors from "../config/color";

function CategoryPanel({ categories }) {
  const classes = useStyles();

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
            <label href="#">{"#" + c.name}</label>
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
