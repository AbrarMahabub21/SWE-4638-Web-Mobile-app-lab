import { useRouter } from "next/router";

export default function QuizPage() {
  const router = useRouter();
  const { quizId } = router.query;

  return (
    <div>
      <h1>Quiz {quizId}</h1>
      {/* Render quiz content here */}
    </div>
  );
}
