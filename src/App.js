import React from "react";
import { createUseStyles } from "react-jss";
import PostList from "./components/PostList";
import SideBar from "./components/SideBar";

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
    display: "flex",
    margin: 0,
  },
});

export default App;
