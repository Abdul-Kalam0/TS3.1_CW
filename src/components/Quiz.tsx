import React from "react";
import { quizData } from "../App";

interface QuizProps {
  quiz: {
    question: string;
    options: string[];
    correctOption: number;
  };
}

export const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  return (
    <div>
      <h1>{quiz.question}</h1>
      <ol>
        {quiz.options.map((options, index) => (
          <li key={index}>{options}</li>
        ))}
      </ol>
    </div>
  );
};
