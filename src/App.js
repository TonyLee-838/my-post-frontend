import React from "react";
import BackgroundView from "./common/BackgoundView";

import moduleName from "html-to-react";
import PostList from "./components/PostList";
import RecentPostPanel from "./components/RecentPostPanel";
import SideBar from "./components/SideBar";
import colors from "./config/color";
import PostContent from "./components/PostContent";

function App() {
  return (
    <BackgroundView>
      <SideBar />
      <PostContent />
      {/* <PostList /> */}
    </BackgroundView>
  );
}

export default App;
