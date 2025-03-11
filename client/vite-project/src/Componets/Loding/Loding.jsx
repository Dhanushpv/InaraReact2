import React from "react";
import "../Loding/Loding.css" // Import CSS for animation

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="Loadingtxt">Loading...</p>
    </div>
  );
};

export default Loading;
