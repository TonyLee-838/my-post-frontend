import React, { useContext, useEffect } from "react";
import { createUseStyles } from "react-jss";
import _ from "lodash";

import PieceGroup from "./PieceGroup";
import ScrollUpButton from "../common/ScrollUpButton";
import colors from "../../config/color";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { useCategories } from "../../hooks";
const PieceList = ({ pieces, onSelect, selectedId }) => {
  const categories = useCategories();

  const classes = useStyle();
  const groupsByTime = _.groupBy(pieces, (piece) =>
    piece.timeCreated.toDateString()
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
    overflow: "hidden",
  },
});

export default PieceList;
