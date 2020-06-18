import { Post } from "./posts-types";

export const fetchPosts = (userId: number): Promise<Post[]> => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((response) => response.json());
};
