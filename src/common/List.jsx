import React from "react";
import ListItem from "./ListItem";
import Separator from "./Separator";

function List({ items, style, separator = false }) {
  return (
    <>
      {items.map((item, i) => (
        <div key={item.id}>
          <ListItem style={style} label={item.label} />
          {separator && i !== items.length - 1 && <Separator />}
        </div>
      ))}
    </>
  );
}

export default List;
