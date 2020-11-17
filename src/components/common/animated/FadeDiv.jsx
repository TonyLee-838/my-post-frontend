import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

const FadeDiv = ({
  triggerProp,
  children,
  className = "",
  duration = 200,
  ...props
}) => {
  const classes = useStyle({ duration });

  //To check if it's the first-time render.
  const [count, setCount] = useState(-1);

  //To prevent triggering animation at first rendering.
  useEffect(() => {
    setCount(count + 1);
  }, [triggerProp]);

  return (
    <div
      className={`${classes.container} ${
        count > 0 ? (triggerProp ? classes.fadeIn : classes.fadeOut) : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const animationStyles = {
  exist: {
    opacity: 1,
    transform: " scale(1.05, 1.05)",
  },
  notExist: {
    opacity: 0,
    transform: "scale(1,1)",
    visibility: "hidden",
  },
};

const useStyle = createUseStyles({
  "@keyframes fadeIn": {
    from: animationStyles.notExist,
    to: animationStyles.exist,
  },
  "@keyframes fadeOut": {
    from: animationStyles.exist,
    to: animationStyles.notExist,
  },
  container: {
    position: "relative",
    visibility: "hidden",
    animationDuration: ({ duration }) => `${duration}ms`,
    animationFillMode: "both",
  },

  fadeIn: {
    visibility: "visible",
    animationName: "$fadeIn",
  },
  fadeOut: {
    visibility: "visible",
    animationName: "$fadeOut",
  },
});

export default FadeDiv;
