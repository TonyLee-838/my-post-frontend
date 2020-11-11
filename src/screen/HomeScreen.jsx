import React from "react";

import BackgroundView from "../common/BackgoundView";
import SideBar from "../components/SideBar";
import AboutMePanel from "../components/AboutMePanel";
import RecentPostPanel from "../components/RecentPostPanel";

function HomeScreen(props) {
  return (
    <BackgroundView>
      <SideBar>
        <AboutMePanel />
      </SideBar>
    </BackgroundView>
  );
}

export default HomeScreen;
