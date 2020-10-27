import React, { useEffect, useState } from "react";

import Panel from "../common/Panel";
import List from "../common/List";

const fakeTitles = [
  { id: "p1", label: "CSS flex and flex-box explore!!" },
  { id: "p2", label: "JSS Explore!" },
  { id: "p3", label: "Summary for MySQL learning" },
  { id: "p4", label: "Summary for Object Oriented Programming" },
  { id: "p5", label: "Thermodynamics Formulas" },
];

function RecentPostPanel() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(fakeTitles);
  }, []);

  return (
    <Panel
      label="Recent Post"
      Content={() => <List items={posts} style={style} />}
    />
  );
}

const style = {
  label: {
    fontWeight: 300,
    wordWrap: "break-word",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  container: {
    "&:hover": "none",
  },
};

export default RecentPostPanel;
