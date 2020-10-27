import React from "react";
import List from "../common/List";
import Panel from "../common/Panel";

function CategoryPanel() {
  const categories = [
    { id: "c1", label: "HTML" },
    { id: "c2", label: "CSS" },
    { id: "c3", label: "JavaScript" },
    { id: "c4", label: "React" },
  ];

  return (
    <Panel
      label="Post Category"
      Content={() => <List items={categories} separator />}
    />
  );
}

export default CategoryPanel;
