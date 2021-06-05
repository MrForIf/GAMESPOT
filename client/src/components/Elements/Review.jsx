import React from "react";
import Dino from "../../img/Dino.jpg";
import Movies from "../../img/Movies.gif";
import Other from "../../img/Background.gif";

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="review-text">
        <p>"{review.message}"</p>
        <span>- {review.author}</span>
      </div>
      <div className="review-game">
        <div className="game-icon">
          {review.game === "dino" && <img src={Dino} alt="Dino" />}
          {review.game === "movies" && <img src={Movies} alt="movies" />}
          {review.game === "other" && <img src={Other} alt="Other" />}
        </div>
      </div>
    </div>
  );
};

export default Review;
