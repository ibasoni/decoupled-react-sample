import { useStoreState } from "pullstate";
import React, { FunctionComponent, useEffect } from "react";
import { fetchUsers } from "./users-api";
import { UsersStore } from "./users-store";

const UsersList: FunctionComponent<UsersListProps> = ({ onSelect }) => {
  const users = useStoreState(UsersStore, (s) => s.users);

  useEffect(() => {
    fetchUsers().then((users) => {
      UsersStore.update((s) => {
        s.users = users;
      });
    });
  }, []);

  if (!users) {
    return <div>Loading users ...</div>;
  }

  return (
    <div className="users-list">
      {users.map((user) => (
        <div
          key={user.id}
          className="user-list-item"
          onClick={() => onSelect(user.id)}
        >
          <h6>
            {user.id} - {user.name}
          </h6>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      ))}
    </div>
  );
};

interface UsersListProps {
  onSelect(userId: number): void;
}

export default UsersList;
