import { useStoreState } from "pullstate";
import React from "react";
import { PostsStore } from "../../posts/posts-store";
import PostsList from "../../posts/PostsList";
import { UsersStore } from "../../users/users-store";

const PostsListContainer = () => {
  const posts = useStoreState(PostsStore, (s) => s.posts);
  const selectedUserId = useStoreState(UsersStore, (s) => s.selectedUserId);

  return <PostsList posts={posts} userId={selectedUserId} />;
};

export default PostsListContainer;
