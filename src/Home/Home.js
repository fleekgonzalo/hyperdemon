import React from 'react';
import demonImage from './images/demon.jpg';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img className="home-image" src={demonImage} alt="Hyper Demon" />
      <div className="home-text">
        <h1>Welcome to Hyper Demon</h1>
        <p>
          Hyper Demon is the ultimate guide for players of the game Demon Slayer. Whether you're a new player or a seasoned veteran, we have everything you need to master the game and become the ultimate demon slayer.
        </p>
      </div>
    </div>
  );
}

export default Home;