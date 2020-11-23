import React from "react";
import { useState } from "react";
import { createUseStyles } from "react-jss";

import colors from "../../../config/color";
import IconItem from "../IconItem";
import TextInput from "../TextInput";

const SearchBox = ({ onSubmit }) => {
  const classes = useStyle();
  const [terms, setTerms] = useState();

  return (
    <div className={classes.container}>
      <TextInput onChange={setTerms} className={classes.searchField} />
      <IconItem
        icon="MdSearch"
        className={classes.searchIcon}
        onClick={() => onSubmit(terms)}
      />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    "& *": {
      color: colors.white,
    },
  },
  searchIconContainer: {
    display: "flex",
  },

  searchField: {
    backgroundColor: colors.medium,
    margin: "0px 20px 0px 15px",
  },
});

export default SearchBox;
