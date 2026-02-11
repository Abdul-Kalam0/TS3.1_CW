import "./styles.css";
import { Header } from "./components/Header";
import { Quiz } from "./components/Quiz";
import { Score } from "./components/Score";

export const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctOption: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctOption: 1,
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    correctOption: 2,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    correctOption: 1,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
    correctOption: 1,
  },
];

export default function App() {
  return (
    <div className="App">
      <Header title="Quiz App" />
      {quizData.map((quiz, index) => (
        <Quiz quiz={quiz} />
      ))}

      <Score currentScore={0} totalScore={3} />
    </div>
  );
}
