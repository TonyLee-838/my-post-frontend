import React from "react";
import { createUseStyles } from "react-jss";

import Icon from "../Icon";
import colors from "../../../config/color";

const DropdownSelectBox = ({ onExpand, value, expanded }) => {
  const classes = useStyle({ expanded });
  return (
    <div onClick={onExpand} className={classes.selectBox}>
      <label className={classes.selectedLabel}>{value}</label>
      <Icon name="MdKeyboardArrowDown" className={classes.selectedIcon} />
    </div>
  );
};

const useStyle = createUseStyles({
  selectBox: {
    display: "flex",
    alignItems: "center",

    width: "200px",
    height: "50px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "box-shadow 100ms ease",
    boxShadow: "0px 0px 1.5px" + colors.lightBlue,
    "&:hover": {
      boxShadow: "0px 0px 1.5px 1px" + colors.lightBlue,
    },
  },
  selectedIcon: {
    transform: ({ expanded }) => `rotate(${expanded ? 180 : 0}deg)`,
    transition: "transform 0.3s ease",
    margin: 0,
    marginLeft: "auto",
    color: colors.medium,
  },
  selectedLabel: {
    flex: 1,
  },
});

export default DropdownSelectBox;
