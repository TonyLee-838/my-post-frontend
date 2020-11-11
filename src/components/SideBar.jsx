import React from "react";
import { createUseStyles } from "react-jss";

import NavPanel from "./NavPanel";
import colors from "../config/color";

function SideBar({ children }) {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <a href="https://github.com/TonyLee-838?tab=repositories">
        <img
          className={classes.avatar}
          src={require("../assets/images/Tony.jpg")}
        />
      </a>
      <NavPanel />
      {children}
    </div>
  );
}

const useStyle = createUseStyles({
  avatar: {
    marginLeft: "50%",
    marginTop: "80px",
    marginBottom: "30px",
    transform: " translateX(-50%)",
    borderRadius: "50%",
    borderColor: colors.secondary,
    border: "8px solid",
    width: "45%",
  },
  container: {
    position: "fixed",

    width: "25%",
    "min-height": "100%",
    backgroundColor: colors.dark,
  },

  "@media (min-width:1312px)": {
    avatar: {
      width: "155px",
    },
  },
});

export default SideBar;
