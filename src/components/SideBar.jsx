import React from "react";
import { createUseStyles } from "react-jss";

import NavPanel from "./NavPanel";
import AboutMePanel from "./AboutMePanel";
import colors from "../config/color";
import RecentPostPanel from "./RecentPostPanel";

function SideBar({}) {
  const styles = useStyle();
  return (
    <div className={styles.container}>
      <NavPanel />
      <AboutMePanel />
      <RecentPostPanel />
    </div>
  );
}

const useStyle = createUseStyles({
  container: {
    height: "100",
    width: "300px",
    backgroundColor: colors.primary,
  },
});

export default SideBar;
