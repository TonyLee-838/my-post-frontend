import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";

const presets = {
  default: {
    color: colors.medium,
    boxShadow: "0px 0px 1.5px" + colors.medium,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.medium,
    },
  },
  primary: {
    color: colors.primary,
    boxShadow: "0px 0px 1.5px" + colors.primary,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.primary,
    },
  },
  secondary: {
    color: colors.secondary,
    boxShadow: "0px 0px 1.5px" + colors.secondary,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.secondary,
    },
  },
  info: {
    color: colors.lightBlue,
    boxShadow: "0px 0px 1.5px" + colors.lightBlue,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.lightBlue,
    },
  },
  success: {
    color: colors.lightGreen,
    boxShadow: "0px 0px 1.5px" + colors.lightGreen,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.lightGreen,
    },
  },
  warning: {
    color: colors.warning,
    boxShadow: "0px 0px 1.5px" + colors.warning,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.warning,
    },
  },
};

const Button = ({ onClick, className = "", label = "", theme = "" }) => {
  const classes = useStyle({ theme });
  return (
    <div className={`${classes.container} ${className}`} onClick={onClick}>
      {label}
    </div>
  );
};

const useStyle = createUseStyles({
  container: ({ theme }) => ({
    padding: "10px 15px 10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: colors.white,
    fontFamily: fontFamilies.text,
    fontWeight: "500",
    ...(theme
      ? presets[theme]
        ? presets[theme]
        : presets.default
      : presets.default),
  }),
});

export default Button;
