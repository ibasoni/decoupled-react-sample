import { loadUserPosts, resetPostsList } from "../posts/posts-actions";
import { setCurrentUser } from "../users/users-actions";

export const handleSelectUser = (userId: number) => {
  setCurrentUser(userId);
  resetPostsList();

  setTimeout(() => {
    loadUserPosts(userId);
  }, 1000);
};
