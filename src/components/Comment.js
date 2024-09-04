import React from "react";

function Comment({ comment }) {
  return (
    <div>
      <p>
        <strong>{comment.user}</strong>: {comment.comment}
      </p>
    </div>
  );
}

export default Comment;
