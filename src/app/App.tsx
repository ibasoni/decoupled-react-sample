import React, { useEffect } from "react";
import { loadAllUsers } from "../users/users-actions";
import UsersList from "../users/UsersList";
import { handleSelectUser } from "./app-actions";
import "./App.css";
import PostsListContainer from "./containers/PostsListContainer";

function App() {
  useEffect(() => {
    loadAllUsers();
  }, []);

  return (
    <div className="App">
      <UsersList onSelect={handleSelectUser} />
      <PostsListContainer />
    </div>
  );
}

export default App;
