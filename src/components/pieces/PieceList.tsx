import React from "react";
import { createUseStyles } from "react-jss";
import _ from "lodash";

import PieceGroup from "./PieceGroup";
import ScrollUpButton from "../common/ScrollUpButton";
import colors from "../../config/color";
import getTimeString from "../../helper/getTimeString";
import { PieceType } from "../../api/pieces";

interface PieceListProps {
  pieces: PieceType[];
  onSelect: Function;
  selectedId: string;
}

const PieceList = ({ pieces, onSelect, selectedId }: PieceListProps) => {
  const classes = useStyle();
  const groupsByTime = _.groupBy(pieces, (piece: PieceType) =>
    getTimeString(piece.timeCreated, "MMM DD")
  );

  return (
    <div id="piece-container" className={classes.container}>
      {Object.keys(groupsByTime).map((time) => (
        <PieceGroup
          time={time}
          selectedId={selectedId}
          pieces={groupsByTime[time]}
          onSelect={onSelect}
        />
      ))}
      <ScrollUpButton />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
});

export default PieceList;
