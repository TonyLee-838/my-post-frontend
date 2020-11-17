import { useContext } from "react";
import _ from "lodash";

import { CategoriesContext } from "../components/contexts/CategoriesContext";

const useCategories = () => _.keyBy(useContext(CategoriesContext), "_id");
export default useCategories;
