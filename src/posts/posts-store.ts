import { Store } from "pullstate";
import { Post } from "./posts-types";

export const PostsStore = new Store<PostsStoreState>({
  posts: null,
});

interface PostsStoreState {
  posts: Post[] | null;
}
