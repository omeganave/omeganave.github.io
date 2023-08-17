import React from 'react'
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti"

// Creates a 1-5 star rating using some react-icons. Calculates based on the product's numerical rating, which is passed as a parameter.
const StarRating = ({ rating }) => {
    const generateStars = () => {
        // Calculating how many of each star are needed.
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;
        const outlineStars = 5 - Math.ceil(rating);

        const stars = [];

        // Fills the stars list with the proper amount of each star.
        for (let i = 0; i < fullStars; i++) {
                stars.push(<span key={i} className="full-star"><TiStarFullOutline /></span>);
        }
          
        if (halfStar) {
                stars.push(<span key={fullStars} className="half-star"><TiStarHalfOutline /></span>);
        }
          
        for (let i = 0; i < outlineStars; i++) {
                stars.push(<span key={fullStars + (halfStar ? 1 : 0) + i} className="outline-star"><TiStarOutline /></span>);
        }
          
        return stars;
    };

    // Returns a div which contains the correct amount of stars.
    return (
        <div className="starRating">
            {generateStars()}
        </div>
    );
};

export default StarRating