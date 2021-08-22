import React from "react";
import Typing from "react-typing-animation";

const Rules = ({ game, setReadRules, readRules }) => {
  const read = () => {
    setReadRules([...readRules, game]);
  };
  return (
    <div className="rules">
      <div className="rules-container">
        <div>
          <h1>Rules</h1>
          <ul className="rules-ul">
            <li>
              {game === "movies"
                ? "Try to guess IMDB of the described movie"
                : "Try to guess the right answer"}
            </li>
            <li>
              {game === "movies"
                ? "There is leverage of one score"
                : "You will see the right answer below after each question"}
            </li>
            <li>You have three lifes</li>
          </ul>
        </div>
        <div>
          <h1>Goal</h1>
          <span>
            {" "}
            {game === "movies"
              ? "Try to guess as many movies IMDB as you can"
              : "Try to get as many points as you can"}
          </span>
        </div>
      </div>
      <button className="rules-btn" onClick={read}>
        GOT IT
      </button>
    </div>
  );
};

export default Rules;
