import React from "react";
import { createUseStyles } from "react-jss";
import TypeItem from "./TypeItem";

export type TargetType = "post" | "piece" | "project";

export type EditType = {
  icon: string;
  target: TargetType;
};

const TYPES: EditType[] = [
  {
    icon: "MdDescription",
    target: "post",
  },
  {
    icon: "MdCropLandscape",
    target: "piece",
  },
  {
    icon: "MdImportantDevices",
    target: "project",
  },
];

interface TypeBarProps {
  onSelect: Function;
}

const TypeBar = ({ onSelect }: TypeBarProps) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      {TYPES.map((type) => (
        <TypeItem type={type} onClick={() => onSelect(type.target)} />
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
