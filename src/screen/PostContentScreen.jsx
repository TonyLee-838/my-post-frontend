import React from "react";
import BackgroundView from "../common/BackgroundView";
import SideBar from "../components/SideBar";
import CategoryPanel from "../components/CategoryPanel";
import PostContent from "../components/PostContent";
import { useParams } from "react-router-dom";

function PostContentScreen(props) {
  const { id } = useParams();
  return (
    <BackgroundView>
      <SideBar>
        <CategoryPanel />
      </SideBar>
      <PostContent id={id} />
    </BackgroundView>
  );
}

export default PostContentScreen;
