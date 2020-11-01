import React from "react";
import BackgroundView from "../common/BackgoundView";
import SideBar from "../components/SideBar";
import CategoryPanel from "../components/CategoryPanel";
import PostContent from "../components/PostContent";
import { useParams } from "react-router-dom";

function PostContentScreen(props) {
  const { id } = useParams();
  console.log(props);
  console.log(id);
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
