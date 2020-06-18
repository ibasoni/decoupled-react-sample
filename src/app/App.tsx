import React from "react";
import UsersList from "../users/UsersList";
import { handleSelectUser } from "./app-actions";
import "./App.css";
import PostsListContainer from "./containers/PostsListContainer";

function App() {
  return (
    <div className="App">
      <UsersList onSelect={handleSelectUser} />
      <PostsListContainer />
    </div>
  );
}

export default App;
