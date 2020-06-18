import { fetchPosts } from "./posts-api";
import { PostsStore } from "./posts-store";

export const loadUserPosts = (userId: number) => {
  // fetch the newly selected user's posts
  fetchPosts(userId).then((posts) => {
    PostsStore.update((s) => {
      s.posts = posts;
    });
  });
};

export const resetPostsList = () => {
  // reset posts list to show a loader
  PostsStore.update((s) => {
    s.posts = null;
  });
};
