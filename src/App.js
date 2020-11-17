import React from "react";

import Router from "./components/Router";
import "./fonts.css";
import BackgroundView from "./components/common/BackgroundView";
import { CategoryProvider } from "./components/contexts/CategoriesContext";

function App() {
  return (
    <BackgroundView>
      <CategoryProvider>
        <Router />
      </CategoryProvider>
    </BackgroundView>
  );
}

export default App;
