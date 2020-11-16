import React from "react";
import { createUseStyles } from "react-jss";
import _ from "lodash";
import PieceGroup from "./PieceGroup";
import TimeItem from "../common/TimeItem";
import Separator from "../common/Separator";
import ScrollUpButton from "../common/ScrollUpButton";

const PieceList = ({ pieces, onSelect, selectedId }) => {
  const classes = useStyle();
  const groups = _.groupBy(pieces, (piece) => piece.timeCreated.toDateString());

  return (
    <div id="piece-container" className={classes.container}>
      {Object.keys(groups).map((time) => (
        <div>
          <TimeItem time={time} format={"MMM DD"} className={classes.time} />
          <PieceGroup
            selectedId={selectedId}
            pieces={groups[time]}
            onSelect={onSelect}
          />
          <Separator width={"65%"} />
        </div>
      ))}
      <ScrollUpButton />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {},
  time: {
    position: "relative",
    top: "25px",
    left: "50px",
    "& label": {
      fontSize: "1.55rem",
    },
  },
});

export default PieceList;
