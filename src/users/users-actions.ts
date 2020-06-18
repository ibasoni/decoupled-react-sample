import { fetchUsers } from "./users-api";
import { UsersStore } from "./users-store";

export const loadAllUsers = () => {
  fetchUsers().then((users) => {
    UsersStore.update((s) => {
      s.users = users;
    });
  });
};

export const setCurrentUser = (userId: number) => {
  // set selected user
  UsersStore.update((s) => {
    s.selectedUserId = userId;
  });
};
