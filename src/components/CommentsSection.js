import React from "react";
import Comment from "./Comment"; // Ensure you have a Comment component

function CommentsSection({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentsSection;
