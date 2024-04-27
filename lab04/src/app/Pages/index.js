import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <p>Choose from a list of available quizzes or create your own!</p>
      <div>
        <a href="./quizzes/quizID.js">Available Quizzes</a> <br />
        <a href="../html/CreateQuiz.html">Create Quiz</a>
      </div>
    </div>
  );
}
