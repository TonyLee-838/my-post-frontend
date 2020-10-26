import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../config/color";
function NavPanel({}) {
  const styles = useStyle();
  return (
    <div className={styles.container}>
      <h4 className={styles.label}>About Me</h4>
      <p className={styles.content}>
        My personal Introduction here!My personal Introduction here!My personal
        Introduction here!My personal Introduction here!My personal Introduction
        here!
      </p>
    </div>
  );
}

const useStyle = createUseStyles({
  container: {
    width: "300px",
    height: "30vh",
    color: colors.white,
    paddingLeft: "20px",
    paddingRight: "40px",
  },
  label: {
    textAlign: "center",
  },
  content: {
    wordWrap: "break-word",
  },
});

export default NavPanel;
