import React from "react";
import { createUseStyles } from "react-jss";

import Separator from "../common/Separator";
import TimeLine from "../common/TimeLine";
import Piece from "./Piece";
import colors from "../../config/color";
import { PieceType } from "../../api/pieces";

interface PieceGroupProps {
  pieces: PieceType[];
  time: string;
  onSelect: Function;
  selectedId: string;
}

const PieceGroup = ({
  pieces,
  time,
  onSelect,
  selectedId,
}: PieceGroupProps) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <TimeLine time={time} />
      <div className={classes.pieces}>
        {pieces.map((piece) => (
          <Piece
            piece={piece}
            isSelected={selectedId === piece._id}
            onSelect={(id: string) => onSelect(id)}
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
    paddingLeft: "130px",
    marginTop: "80px",
    backgroundColor: colors.white,
  },
  pieces: {
    width: "100%",
    padding: "10px",
    gridAutoRows: "150px",
  },
});

export default PieceGroup;
