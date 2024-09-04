import React from "react";
function CVideo({ video, upvotes, downvotes, setUpvotes, setDownvotes }) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <button onClick={() => setUpvotes(upvotes + 1)}>👍 {upvotes}</button>
      <button onClick={() => setDownvotes(downvotes + 1)}>
        👎 {downvotes}
      </button>
    </div>
  );
}

export default CVideo;
