import React from "react";
import { useState } from "react";
import PieceContent from "./pieces/PieceContent";
import PieceList from "./pieces/PieceList";

const data = [
  {
    id: "d1",
    timeCreated: new Date(2020, 10, 16, 12, 32, 32),
    title: "Code Example",
    markdown: `#h1\n##h2\n Code Example Here \n\n \`\`\`javascript\n
import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../../config/color";

function BackgroundView({ children }) {
  const classes = useStyle();

  return <div className={classes.container}>{children}</div>;
}

const useStyle = createUseStyles({
  container: {
    backgroundColor: colors.white,
    margin: 0,
    display: "flex",
    flexDirection: "column",

    "@media  (min-width:688px)": {
      flexDirection: "row",
    },
  },
});

export default BackgroundView;

    \`\`\` `,
  },
  {
    id: "d2",
    timeCreated: new Date(2020, 9, 30, 12, 31, 32),
    title: "Setup custom snippets in VSCode2.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n - 2",
  },
  {
    id: "d3",
    timeCreated: new Date(2020, 9, 30, 12, 30, 32),
    title: "Setup custom snippets in VSCode3.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n - 3",
  },
  {
    id: "d21",
    timeCreated: new Date(2020, 9, 30, 12, 31, 32),
    title: "Setup custom snippets in VSCode2.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n - 2",
  },
  {
    id: "d31",
    timeCreated: new Date(2020, 9, 30, 12, 30, 32),
    title: "Setup custom snippets in VSCode3.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n - 3",
  },
  {
    id: "d24",
    timeCreated: new Date(2020, 9, 30, 12, 31, 32),
    title: "Setup custom snippets in VSCode2.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n - 2",
  },
  {
    id: "d32",
    timeCreated: new Date(2020, 9, 30, 12, 30, 32),
    title: "Setup custom snippets in VSCode3.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n - 3",
  },
  {
    id: "d241",
    timeCreated: new Date(2020, 9, 30, 12, 31, 32),
    title: "Setup custom snippets in VSCode2.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n - 2",
  },
  {
    id: "d321",
    timeCreated: new Date(2020, 9, 30, 12, 30, 32),
    title: "Setup custom snippets in VSCode3.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n - 3",
  },
  {
    id: "d2421",
    timeCreated: new Date(2020, 9, 30, 12, 31, 32),
    title: "Setup custom snippets in VSCode2.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n - 2",
  },
  {
    id: "d3231",
    timeCreated: new Date(2020, 9, 30, 12, 30, 32),
    title: "Setup custom snippets in VSCode3.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n - 3",
  },
  {
    id: "d4",
    timeCreated: new Date(2020, 9, 28, 11, 31, 32),
    title: "Setup custom snippets in VSCode4.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n - 4 ",
  },
  {
    id: "d5",
    timeCreated: new Date(2020, 9, 28, 11, 28, 32),
    title: "Setup custom snippets in VSCode5.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n -5",
  },
  {
    id: "d6",
    timeCreated: new Date(2020, 9, 27, 11, 18, 32),
    title: "Setup custom snippets in VSCode6.",
    markdown:
      "# setting up snippets:\n - Do something.\n - Do another thing.\n-6",
  },
];

const PieceMain = () => {
  const [pieces, setPieces] = useState(data);
  const [selectedId, setSelectedId] = useState("");

  const handleSelect = (id) => {
    if (selectedId) setSelectedId("");

    //Reselect piece itself:
    if (selectedId === id) return;

    setTimeout(() => {
      setSelectedId(id);
    }, 100);
  };

  const handleClose = () => {
    setSelectedId("");
  };

  return (
    <div>
      <PieceList
        pieces={pieces}
        selectedId={selectedId}
        onSelect={handleSelect}
      />
      <PieceContent
        id="piece-content"
        piece={pieces.find((piece) => piece.id === selectedId)}
        selectedId={selectedId}
        onClose={handleClose}
      />
    </div>
  );
};

export default PieceMain;
