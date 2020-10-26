import React from "react";
import ListItem from "./ListItem";

function List({ items }) {
  return (
    <div>
      {items.map((item) => (
        <ListItem key={item.id} label={item.label} />
      ))}
    </div>
  );
}

export default List;
