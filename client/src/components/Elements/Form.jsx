import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../../actions/reviews";
const Form = () => {
  const dispatch = useDispatch();

  const [reviewData, setReviewData] = useState({
    author: "",
    message: "",
    game: "dino",
    maxScore: 6,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview(reviewData));
  };
  return (
    <div className="review">
      <div className="review-text">
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <input
            onChange={(e) =>
              setReviewData({ ...reviewData, message: e.target.value })
            }
            value={reviewData.message}
            name="message"
            type="text"
            placeholder="message"
          />
          <input
            onChange={(e) =>
              setReviewData({ ...reviewData, author: e.target.value })
            }
            value={reviewData.author}
            name="author"
            type="text"
            placeholder="author"
          />
          <select
            onChange={(e) =>
              setReviewData({ ...reviewData, game: e.target.value })
            }
            name="game"
            id="select_Game"
          >
            <option value="dino">Dino</option>
            <option value="m-sweeper">M-sweeper</option>
            <option value="other">Other</option>
          </select>
          <input type="submit" value="DONE" />
        </form>
      </div>
    </div>
  );
};

export default Form;
