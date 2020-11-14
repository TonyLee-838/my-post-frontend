import React from "react";

import Router from "./components/Router";
import "./fonts.css";
import BackgroundView from "./components/common/BackgroundView";

function App() {
  return (
    <BackgroundView>
      <Router />
    </BackgroundView>
  );
}

export default App;
