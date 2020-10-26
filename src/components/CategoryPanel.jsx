import React from "react";
import List from "../common/List";
import Panel from "../common/Panel";

function CategoryPanel() {
  const categories = [
    { id: 1, label: "HTML" },
    { id: 2, label: "CSS" },
    { id: 3, label: "JavaScript" },
    { id: 4, label: "React" },
  ];

  return (
    <Panel label="Post Category" Content={() => <List items={categories} />} />
  );
}

export default CategoryPanel;
