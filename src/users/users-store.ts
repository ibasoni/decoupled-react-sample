import { Store } from "pullstate";
import { User } from "./users-types";

export const UsersStore = new Store<UsersStoreState>({
  users: null,
  selectedUserId: null,
});

interface UsersStoreState {
  users: User[] | null;
  selectedUserId: number | null;
}
