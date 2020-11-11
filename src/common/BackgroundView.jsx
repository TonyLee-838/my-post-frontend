import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../config/color";

function BackgroundView({ children }) {
  const classes = useStyle();

  return <div className={classes.container}>{children}</div>;
}

const useStyle = createUseStyles({
  container: {
    backgroundColor: colors.white,
    margin: 0,
  },
});

export default BackgroundView;
