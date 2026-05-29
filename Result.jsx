import Confetti from "react-confetti";

export default function Result({
  score,
  total,
  restartQuiz,
  highScore,
}) {
  return (
    <div className="result-box">
      <Confetti />

      <h2>🎉 Quiz Completed</h2>

      <div className="score-circle">
        {Math.round((score / total) * 100)}%
      </div>

      <h3>
        Score: {score}/{total}
      </h3>

      <p>🏆 High Score: {highScore}</p>

      <button onClick={restartQuiz}>
        🔄 Play Again
      </button>
    </div>
  );
}