import React from "react";

interface Score {
  currentScore: number;
  totalScore: number;
}

export const Score: React.FC<Score> = ({ currentScore, totalScore }) => {
  return (
    <div>
      <p>Current Score: {currentScore}</p>
      <p>Total Score: {totalScore}</p>
      <p>
        Score: {currentScore}/{totalScore}
      </p>
    </div>
  );
};
