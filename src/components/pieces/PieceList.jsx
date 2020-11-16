import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import _ from "lodash";
import PieceGroup from "./PieceGroup";
import TimeItem from "../common/TimeItem";
import Separator from "../common/Separator";

const PieceList = ({ pieces, onSelect }) => {
  const classes = useStyle();
  const groups = _.groupBy(pieces, (piece) => piece.timeCreated.toDateString());

  return (
    <div id="piece-container" className={classes.container}>
      {Object.keys(groups).map((time) => (
        <div>
          <TimeItem time={time} className={classes.time} />
          <PieceGroup pieces={groups[time]} onSelect={onSelect} />
          <Separator />
        </div>
      ))}
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
