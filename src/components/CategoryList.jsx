import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../config/color";
function NavPanel({}) {
  const styles = useStyle();
  return <div className={styles.navBar}></div>;
}

const useStyle = createUseStyles({
  navBar: {
    display: "flex",
    flexDirection: "column",
    flex: "",
    justifyContent: "space-around",

    alignItems: "center",
    width: "300px",
    height: "30vh",

    backgroundColor: "#00b3ff",
  },
});

export default NavPanel;
