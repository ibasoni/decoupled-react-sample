import { UsersStore } from "./users-store";

export const setCurrentUser = (userId: number) => {
  // set selected user
  UsersStore.update((s) => {
    s.selectedUserId = userId;
  });
};
