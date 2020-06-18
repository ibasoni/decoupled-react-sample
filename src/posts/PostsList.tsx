import React, { FunctionComponent } from "react";
import { Post } from "./posts-types";

const PostsList: FunctionComponent<PostsListProps> = ({ posts, userId }) => {
  return (
    <>
      <div className="posts-list">
        {!userId && (
          <div style={{ padding: 10 }}>
            Please select a user to see his posts
          </div>
        )}
        {posts &&
          userId &&
          posts.map((post) => (
            <div key={post.id} className="posts-list-item">
              <h6>
                {post.id} - {post.title}
              </h6>
              <p>{post.body}</p>
            </div>
          ))}
        {userId && !posts && (
          <div style={{ padding: 10 }}>Loading posts ...</div>
        )}
      </div>
      <hr />
    </>
  );
};

interface PostsListProps {
  userId: number | null;
  posts: Post[] | null;
}

export default PostsList;
