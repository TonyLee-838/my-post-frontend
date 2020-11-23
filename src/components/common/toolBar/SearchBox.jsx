import React from "react";
import { createUseStyles } from "react-jss";

import colors from "../../../config/color";
import IconItem from "../IconItem";
import TextInput from "../TextInput";

const SearchBox = ({ notFound, onTermsChange }) => {
  const classes = useStyle({ notFound });

  return (
    <div className={classes.container}>
      <IconItem icon="MdSearch" className={classes.searchIcon} />
      <TextInput onChange={onTermsChange} className={classes.searchField} />
      <IconItem icon="MdClear" className={classes.deleteIcon} />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  deleteIcon: {
    position: "relative",
    right: "50px",
    borderRadius: "50%",
    opacity: 0.5,
    "& *": {
      fontSize: "1.1rem",
      color: colors.light,
    },
    backgroundColor: colors.dark,
  },
  searchIcon: {
    "& *": {
      color: colors.white,
    },
  },

  searchField: {
    transition: "box-shadow 200ms ease,color 200ms ease",
    backgroundColor: colors.medium,
    margin: "0px 20px 0px 15px",
    color: ({ notFound }) => (notFound ? colors.warning : colors.black),
    boxShadow: ({ notFound }) =>
      notFound ? "0px 0px 3.5px 2.5px" + colors.warning : "",
    "&:focus": {
      outline: "none",
    },
  },
});

export default SearchBox;
