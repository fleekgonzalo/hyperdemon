import React from 'react';
import './Guides.css';

function Guides() {
  return (
    <div className="guides">
      <h1>Guides</h1>
      <p>
        Check out these guides to help you become the best demon slayer!
      </p>
      <div className="guides-container">
        <div className="guide-card">
          <img
            src="https://via.placeholder.com/200x200.png?text=Guide+1"
            alt="Guide 1"
          />
          <h2>Guide 1</h2>
          <p>Description of Guide 1</p>
          <a href="/">Read More</a>
        </div>
        <div className="guide-card">
          <img
            src="https://via.placeholder.com/200x200.png?text=Guide+2"
            alt="Guide 2"
          />
          <h2>Guide 2</h2>
          <p>Description of Guide 2</p>
          <a href="/">Read More</a>
        </div>
        <div className="guide-card">
          <img
            src="https://via.placeholder.com/200x200.png?text=Guide+3"
            alt="Guide 3"
          />
          <h2>Guide 3</h2>
          <p>Description of Guide 3</p>
          <a href="/">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default Guides;