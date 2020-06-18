import { useStoreState } from "pullstate";
import React, { FunctionComponent } from "react";
import { UsersStore } from "./users-store";

const UsersList: FunctionComponent<UsersListProps> = ({ onSelect }) => {
  const users = useStoreState(UsersStore, (s) => s.users);

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
