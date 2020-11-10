import React from "react";

import Router from "./router/Router";
import Loader from "webfontloader";
import "./fonts.css";

function App() {
  // Loader.load({
  //   google: {
  //     families: ["Anton", "Ubuntu"],
  //   },
  //   // custom: {
  //   //   families: ["Ubuntu-title", "Crimson Text"],
  //   //   urls: ["./fonts.css"],
  //   // },
  // });

  return <Router />;
}

export default App;
