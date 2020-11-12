import React from "react";
import { compiler } from "markdown-to-jsx";
import { createUseStyles } from "react-jss";
import colors from "../config/color";

function Markdown({ markdown }) {
  const classes = useStyles();
  return <div className={classes.container}>{compiler(markdown)}</div>;
}

const useStyles = createUseStyles({
  container: {
    "& h1": {
      textAlign: "center",
    },
    "& pre": {
      backgroundColor: colors.light,
    },
  },
});

export default Markdown;
