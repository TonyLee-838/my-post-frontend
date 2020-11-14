import React from "react";

import Router from "./router/Router";
import Loader from "webfontloader";
import "./fonts.css";
import BackgroundView from "./common/BackgroundView";
import SideBar from "./components/SideBar";

function App() {
  return (
    <BackgroundView>
      <Router />
    </BackgroundView>
  );
}

export default App;
