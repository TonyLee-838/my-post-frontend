import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import _ from "lodash";

import PieceGroup from "./PieceGroup";
import ScrollUpButton from "../common/ScrollUpButton";
import colors from "../../config/color";
import { CategoriesContext } from "../contexts/CategoriesContext";

const PieceList = ({ pieces, onSelect, selectedId }) => {
  const categories = useContext(CategoriesContext);
  console.log(categories);

  const classes = useStyle();
  // const groupsByTime = _.groupBy(pieces, (piece) => piece.timeCreated.toDateString());
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
  container: {
    backgroundColor: colors.light,
    overflow: "hidden",
  },
});

export default PieceList;
