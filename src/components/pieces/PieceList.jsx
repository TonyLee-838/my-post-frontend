import React from "react";
import { createUseStyles } from "react-jss";
import _ from "lodash";
import moment from "moment";

import PieceGroup from "./PieceGroup";
import ScrollUpButton from "../common/ScrollUpButton";
import colors from "../../config/color";
import getTimeString from "../../helper/getTimeString";
const PieceList = ({ pieces, onSelect, selectedId }) => {
  const classes = useStyle();
  const groupsByTime = _.groupBy(pieces, (piece) =>
    getTimeString(piece.timeCreated, "MMM DD")
  );

  console.log("groupsByTime : ", groupsByTime);

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
