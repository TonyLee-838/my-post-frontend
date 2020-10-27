import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../config/color";

function Panel({ label, Content }) {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <h4 className={classes.label}>{label}</h4>
      <Content className={[classes.container]} />
    </div>
  );
}

const useStyle = createUseStyles({
  container: {
    height: "30vh",
    color: colors.white,
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  label: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: "1.5rem",
    margin: "15px 0px 15px 0px",
  },
  content: {
    wordWrap: "break-word",
  },
});

export default Panel;
