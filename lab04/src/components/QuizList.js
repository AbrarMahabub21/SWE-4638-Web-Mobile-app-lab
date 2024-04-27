import React from "react";

const QuizList = ({ quizzes }) => {
  return (
    <div>
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>{quiz.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
