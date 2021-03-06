import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Separator from "../Separator";
import DropdownOption from "./DropdownOption";
import DropdownSelectBox from "./DropdownSelectBox";

const Dropdown = ({ onSelect, options }) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState();

  const classes = useStyle({ expanded });

  return (
    <div>
      <DropdownSelectBox
        onExpand={() => setExpanded(!expanded)}
        value={selected}
        expanded={expanded}
      />

      {expanded && (
        <div className={classes.options}>
          {options.map((option, i) => (
            <div>
              <DropdownOption
                label={option.label}
                value={option.value}
                onClick={() => {
                  setSelected(option.value);
                  setExpanded(false);
                  onSelect(option.value);
                }}
              />
              {i !== options.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const useStyle = createUseStyles({
  options: {
    position: "absolute",
    marginTop: "4px",
    width: "200px",
    height: "auto",
  },
});

export default Dropdown;
