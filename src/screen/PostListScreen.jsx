import React from "react";
import SideBar from "../components/SideBar";
import BackgroundView from "../common/BackgoundView";
import CategoryPanel from "../components/CategoryPanel";
import PostList from "../components/PostList";

function PostListScreen(props) {
  return (
    <>
      <SideBar>
        <CategoryPanel />
      </SideBar>
      <BackgroundView>
        <PostList />
      </BackgroundView>
    </>
  );
}

export default PostListScreen;
