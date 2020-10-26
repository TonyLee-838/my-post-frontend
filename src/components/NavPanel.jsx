import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../config/color";
function NavPanel() {
  const styles = useStyle();
  return (
    <div className={styles.container}>
      <a className={styles.link} href="#">
        Home
      </a>
      <a className={styles.link} href="#">
        What I learnt today
      </a>
      <a className={styles.link} href="#">
        Blogs
      </a>
      <a className={styles.link} href="#">
        Projects
      </a>
    </div>
  );
}

const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: "",
    justifyContent: "space-around",

    alignItems: "center",
    width: "300px",
    height: "35vh",
    backgroundColor: colors.secondary,
  },
  link: {
    color: colors.white,
  },
});

export default NavPanel;
