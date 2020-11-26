import React from "react";

import Router from "./components/Router.tsx";
import "./fonts.css";
import { CategoryProvider } from "./components/contexts/CategoriesContext";

function App() {
  return (
    <CategoryProvider>
      <Router />
    </CategoryProvider>
  );
}

export default App;
