import React from 'react';
import { Link } from 'react-router-dom';

// The Home page. Displays some text and a button that links to the Products page.
const Home = () => {
  return (
    <div className='homeContainer'>
      <div className='homeP'>
        <p className='noMargin'>"AromaGlow Naturals: Discover the Art of Nourishing Your Skin and Elevating Your Senses, One Luxurious Lather at a Time."</p>
      </div>
      <Link to="/products" className='homeButton'>Click here!</Link>
    </div>
  )
}

export default Home