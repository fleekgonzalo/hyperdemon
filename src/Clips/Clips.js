import React from 'react';
import './Clips.css';

function Clips() {
  return (
    <div className="clips">
      <h1>Clips</h1>
      <p>
        Check out these clips from the best demon slayers around the world!
      </p>
      <div className="clips-container">
        <iframe
          title="Hyper Demon Clip 1"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          title="Hyper Demon Clip 2"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          title="Hyper Demon Clip 3"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Clips;