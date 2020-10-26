import React from "react";
import { createUseStyles } from "react-jss";
import PostList from "./components/PostList";

function App() {
  const styles = useStyle();
  return (
    <div className={styles.container}>
      <PostList />
    </div>
  );
}

const useStyle = createUseStyles({
  container: {
    display: "flex",
    margin: 0,
    padding: 0,
  },
});

export default App;
