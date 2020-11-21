import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../../../config/color";

const DropdownOption = ({ onClick, value }) => {
  const classes = useStyle();
  return (
    <div onClick={onClick} className={classes.option}>
      {value}
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
    "&:hover": {
      backgroundColor: colors.lightBlue,
      color: colors.white,
    },
  },
});

export default DropdownOption;
