import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../../../config/color";
import fontFamilies from "../../../config/fontFamily";

const DropdownOption = ({ onClick, value, label = "" }) => {
  const classes = useStyle();
  return (
    <div onClick={onClick} className={classes.option}>
      {label || value}
    </div>
  );
};

const useStyle = createUseStyles({
  option: {
    cursor: "pointer",
    height: "40px",
    backgroundColor: colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 50ms ease",
    fontFamily: fontFamilies.text,
    "&:hover": {
      backgroundColor: colors.lightBlue,
      color: colors.white,
    },
  },
});

export default DropdownOption;
