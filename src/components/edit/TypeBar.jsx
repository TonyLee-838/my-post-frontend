import React from "react";
import { createUseStyles } from "react-jss";
import TypeItem from "./TypeItem";

const types = [
  {
    icon: "MdDescription",
    label: "Post",
    path: "/edit/post",
  },
  {
    icon: "MdCropLandscape",
    label: "Piece",
    path: "/edit/piece",
  },
  {
    icon: "MdImportantDevices",
    label: "Project",
    path: "/edit/project",
  },
];

const TypeBar = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      {types.map((type) => (
        <TypeItem icon={type.icon} label={type.label} path={type.path} />
      ))}
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "initial",
    width: "15%",
    padding: "15px",
    margin: "20px",
  },
});

export default TypeBar;
