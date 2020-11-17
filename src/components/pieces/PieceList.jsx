import React from "react";
import { createUseStyles } from "react-jss";
import _ from "lodash";
import PieceGroup from "./PieceGroup";
import ScrollUpButton from "../common/ScrollUpButton";

const PieceList = ({ pieces, onSelect, selectedId }) => {
  const classes = useStyle();
  const groups = _.groupBy(pieces, (piece) => piece.timeCreated.toDateString());

  return (
    <div id="piece-container" className={classes.container}>
      {Object.keys(groups).map((time) => (
        <PieceGroup
          time={time}
          selectedId={selectedId}
          pieces={groups[time]}
          onSelect={onSelect}
        />
      ))}
      <ScrollUpButton />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {},
});

export default PieceList;
