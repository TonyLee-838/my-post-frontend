/* eslint-disable */
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { getPieceById } from "../../api/pieces";
import colors from "../../config/color";
import Markdown from "../common/Markdown";

const PieceContent = ({ selectedId }) => {
  const classes = useStyle();
  const [piece, setPiece] = useState();

  useEffect(() => {
    if (!selectedId) return;
    const fetchPiece = async () => {
      const piece = await getPieceById(selectedId);
      setPiece(piece);
    };
    fetchPiece();
  }, [selectedId]);

  console.log("piece2 : ", piece);

  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        {piece && (
          <Markdown markdown={piece.content} className={classes.content} />
        )}
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    marginTop: "75px",
    padding: "30px 20px 30px 20px",
    width: "30%",
    height: "80%",
    overflow: "scroll",
  },

  contentContainer: {
    backgroundColor: colors.light,
    borderRadius: "10px",
    boxShadow: `3px 3px 4px${colors.medium}`,
    padding: "30px",
  },
  content: {
    "& h1": {
      textAlign: "center",
      fontWeight: "700",
    },
  },
});

export default PieceContent;
