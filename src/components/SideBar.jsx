import React from "react";
import { createUseStyles } from "react-jss";

import NavPanel from "./sidebar/NavPanel";
import colors from "../config/color";

function SideBar() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <a href="https://github.com/TonyLee-838?tab=repositories">
        <img
          alt="avatar"
          className={classes.avatar}
          src={require("../assets/images/Tony.jpg")}
        />
      </a>
      <NavPanel />
    </div>
  );
}

const useStyle = createUseStyles({
  avatar: {
    border: "8px solid",
    borderRadius: "50%",
    borderColor: colors.secondary,
    marginLeft: "50%",
    marginBottom: "30px",
    transform: " translateX(-50%)",

    //Styles for (screen-width < 688px)
    marginTop: "80px",
    width: "30%",
  },
  container: {
    backgroundColor: colors.darkBlue,
  },

  "@media (min-width:688px)": {
    avatar: {
      width: "50%",
      marginTop: "80px",
    },
    container: {
      width: "22%",
      height: "100vh",
      position: "sticky",
      top: 0,
    },
  },
  "@media (min-width:1312px)": {
    avatar: {
      width: "155px",
    },
    container: {
      width: "330px",
      height: "100vh",
      position: "sticky",
      top: 0,
    },
  },
});

export default SideBar;
