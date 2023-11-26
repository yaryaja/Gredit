import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BoardHeader from "./BoardHeader";
import { CommunityContext } from "./CommunityContext";
import PostForm from "./PostForm";
import PostsListing from "./PostsListing";

function Board() {
  const {community:communityFromUrl} = useParams();
  const {setCommunity} = useContext(CommunityContext);
  useEffect(() => {
    setCommunity(communityFromUrl);
  }, [communityFromUrl]);

  return (<div>
    <BoardHeader />
    <PostForm />
    <PostsListing />
  </div>);
}

export default Board;