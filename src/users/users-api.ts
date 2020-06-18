import { User } from "./users-types";

export const fetchUsers = (): Promise<User[]> => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
};
