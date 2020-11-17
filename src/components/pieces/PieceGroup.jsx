import React from "react";
import { createUseStyles } from "react-jss";

import Separator from "../common/Separator";
import TimeLine from "../common/TimeLine";
import Piece from "./Piece";
import colors from "../../config/color";

const COL_LENGTH = 4;

const PieceGroup = ({ pieces, time, onSelect, selectedId }) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <TimeLine time={time} />
      <div className={classes.pieces}>
        {pieces.map((piece, index) => (
          <Piece
            piece={piece}
            isActive={selectedId}
            isSelected={selectedId === piece.id}
            onSelect={(id) => onSelect(id, index % COL_LENGTH)}
          />
        ))}
      </div>
      <Separator width={"80%"} />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    position: "relative",
    paddingLeft: "150px",
    marginTop: "150px",
    backgroundColor: colors.white,
  },
  pieces: {
    width: "100%",
    display: "grid",
    padding: "35px",
    gridTemplateColumns: "22% 22% 22% 22%",
    gridAutoRows: "150px",
  },
});

export default PieceGroup;
