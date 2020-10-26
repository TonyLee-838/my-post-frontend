import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../config/color";

function Panel({ label, Content }) {
  const styles = useStyle();
  return (
    <div className={styles.container}>
      <h4 className={styles.label}>{label}</h4>
      <Content className={[styles.container]} />
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
