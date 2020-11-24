import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";

const presets: { [index: string]: any } = {
  default: {
    color: colors.dark,
    boxShadow: "0px 0px 1.5px 1px" + colors.dark,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.dark,
    },
  },
  primary: {
    color: colors.primary,
    boxShadow: "0px 0px 1.5px 1px" + colors.primary,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.primary,
    },
  },
  secondary: {
    color: colors.secondary,
    boxShadow: "0px 0px 1.5px 1px" + colors.secondary,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.secondary,
    },
  },
  info: {
    color: colors.lightBlue,
    boxShadow: "0px 0px 1.5px 1px" + colors.lightBlue,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.lightBlue,
    },
  },
  success: {
    color: colors.lightGreen,
    boxShadow: "0px 0px 1.5px 1px" + colors.lightGreen,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.lightGreen,
    },
  },
  warning: {
    color: colors.warning,
    boxShadow: "0px 0px 1.5px 1px" + colors.warning,
    "&:hover": {
      boxShadow: "0px 0px 3px 1.5px" + colors.warning,
    },
  },
  disable: {
    color: colors.medium,
    boxShadow: "0px 0px 1.5px 1px" + colors.medium,
    cursor: "auto",
    "&:hover": {
      boxShadow: "0px 0px 1.5px 1px" + colors.medium,
    },
  },
};

interface ButtonProps {
  className?: string;
  disable?: boolean;
  label?: string;
  onClick: React.MouseEventHandler;
  theme?:
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "disable";
}

const Button = ({
  className = "",
  disable = false,
  label = "",
  onClick,
  theme = "default",
}: ButtonProps) => {
  const classes = useStyle({ theme, disable });
  return (
    <div
      className={`${classes.container} ${className}`}
      onClick={!disable ? onClick : () => {}}
    >
      {label}
    </div>
  );
};

const useStyle = createUseStyles({
  container: ({ theme, disable }) => ({
    padding: "10px 15px 10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: colors.white,
    fontFamily: fontFamilies.text,
    fontWeight: "500",
    ...(!disable
      ? theme
        ? presets[theme]
          ? presets[theme]
          : presets.default
        : presets.default
      : presets.disable),
  }),
});

export default Button;
