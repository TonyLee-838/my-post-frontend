import React from "react";
import { createUseStyles } from "react-jss";
import PostList from "./components/PostList";
import RecentPostPanel from "./components/RecentPostPanel";
import SideBar from "./components/SideBar";
import colors from "./config/color";

function App() {
  const styles = useStyle();
  return (
    <div className={styles.container}>
      <SideBar />
      <PostList />
    </div>
  );
}

const useStyle = createUseStyles({
  container: {
    // Test Style:
    // width: "500px",
    // height: "500px",
    // backgroundColor: colors.primary,

    display: "flex",
    margin: 0,
  },
});

export default App;
