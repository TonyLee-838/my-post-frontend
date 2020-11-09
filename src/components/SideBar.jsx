import React from "react";
import { createUseStyles } from "react-jss";

import NavPanel from "./NavPanel";
import AboutMePanel from "./AboutMePanel";
import colors from "../config/color";
import RecentPostPanel from "./RecentPostPanel";
import CategoryPanel from "./CategoryPanel";

function SideBar({ children }) {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <NavPanel />
      {children}
    </div>
  );
}

const useStyle = createUseStyles({
  container: {
    height: "100",
    width: "450px",
    backgroundColor: colors.primary,
  },
});

export default SideBar;
