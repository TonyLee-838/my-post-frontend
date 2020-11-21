import React from "react";
import { createUseStyles } from "react-jss";

const Main = ({ children }) => {
  const classes = useStyle();
  return <div className={classes.container}>{children}</div>;
};

const useStyle = createUseStyles({
  container: {
    flex: 1,
  },
});

export default Main;
