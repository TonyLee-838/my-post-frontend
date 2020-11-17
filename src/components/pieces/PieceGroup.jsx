import React from "react";
import { createUseStyles } from "react-jss";
import Separator from "../common/Separator";
import TimeItem from "../common/TimeItem";
import Piece from "./Piece";

const PieceGroup = ({ pieces, time, onSelect, selectedId }) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <TimeItem time={time} format={"MMM DD"} className={classes.time} />
      <div className={classes.pieces}>
        {pieces.map((piece) => (
          <Piece
            piece={piece}
            isActive={selectedId}
            isSelected={selectedId === piece.id}
            onSelect={onSelect}
          />
        ))}
      </div>
      <Separator width={"65%"} />
    </div>
  );
};

const useStyle = createUseStyles({
  pieces: {
    width: "100%",
    display: "grid",
    padding: "30px",
    gridTemplateColumns: "21% 21% 21%",
    gridAutoRows: "150px",
  },
  time: {
    position: "relative",
    top: "25px",
    left: "50px",
    "& label": {
      fontSize: "1.55rem",
    },
  },
});

export default PieceGroup;
