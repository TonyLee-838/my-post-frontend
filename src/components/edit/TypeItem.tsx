import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import IconItem from "../common/IconItem";
import { EditType } from "./TypeBar";

interface TypeItemProps {
  type: EditType;
  onClick: React.MouseEventHandler;
}

const TypeItem = ({ type, onClick }: TypeItemProps) => {
  const classes = useStyle();
  return (
    <div key={`type-${type.target}`} className={classes.type} onClick={onClick}>
      <IconItem icon={type.icon} label={type.target} />
    </div>
  );
};

const useStyle = createUseStyles({
  type: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",

    width: "100%",
    padding: "15px",
    marginBottom: "5px",

    borderRadius: "5px",
    boxShadow: "3.5px 3.5px 2px" + colors.medium,
    cursor: "pointer",

    "& *": {
      cursor: "pointer",
    },

    "& label": {
      color: colors.black,
      textDecoration: "none",
      fontFamily: fontFamilies.round,
      cursor: "pointer",
      padding: "0px 20px 0px 20px",
    },
  },
});

export default TypeItem;
