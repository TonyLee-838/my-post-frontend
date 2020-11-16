import React, { useEffect } from "react";
import { compiler } from "markdown-to-jsx";
import { createUseStyles } from "react-jss";
import Prism from "prismjs";
import "../../assets/css/prism.css";

import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";

function Markdown({ markdown, className }) {
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  });

  return (
    <div className={`${classes.container} ${className}`}>
      {compiler(markdown)}
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    fontFamily: fontFamilies.text,
    "& pre": {
      backgroundColor: colors.dark,
    },
    "& p": {
      fontSize: "1.15rem",
    },
  },
});

export default Markdown;
