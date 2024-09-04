import React, { useState } from "react";
import video from "../data/video.js"; // Ensure this path is correct
import Video from "./CVideo.js"; // Ensure the case matches your file name
import CommentsSection from "./CommentsSection"; // Ensure this path is correct

function App() {
  const [showComments, setShowComments] = useState(true);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  return (
    <div className="App">
      <Video
        video={video}
        upvotes={upvotes}
        downvotes={downvotes}
        setUpvotes={setUpvotes}
        setDownvotes={setDownvotes}
      />
      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <CommentsSection comments={video.comments} />}
    </div>
  );
}

export default App;
