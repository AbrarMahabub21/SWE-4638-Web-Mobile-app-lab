import Index from "./Pages/index";
export default function Home() {
  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <p>Choose from a list of available quizzes or create your own!</p>
      <div>
        <Index />
      </div>
    </div>
  );
}
