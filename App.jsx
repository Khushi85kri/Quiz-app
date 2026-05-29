import { useEffect, useState } from "react";
import "./App.css";

const questions = [
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook",
  },
  {
    question: "Which hook is used for state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "HighText Machine Language",
      "Hyper Tool Multi Language",
      "None",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "CSS is used for?",
    options: ["Styling", "Database", "Backend", "Server"],
    answer: "Styling",
  },
  {
    question: "JavaScript is?",
    options: ["Programming Language", "OS", "Browser", "Database"],
    answer: "Programming Language",
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const [showResult, setShowResult] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [coins, setCoins] = useState(0);
  const [lives, setLives] = useState(3);
  const [highScore, setHighScore] = useState(
    localStorage.getItem("highScore") || 0
  );

  useEffect(() => {
    if (timer > 0 && !showResult) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (timer === 0) {
      handleNext();
    }
  }, [timer]);

  const handleAnswer = (option) => {
    setSelected(option);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setCoins(coins + 10);
    } else {
      setLives(lives - 1);
    }
  };

  const handleNext = () => {
    if (lives === 0) {
      setShowResult(true);
      return;
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected("");
      setTimer(15);
    } else {
      setShowResult(true);

      if (score > highScore) {
        localStorage.setItem("highScore", score);
        setHighScore(score);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelected("");
    setScore(0);
    setCoins(0);
    setLives(3);
    setTimer(15);
    setShowResult(false);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="quiz-box">

        <div className="header">
          <h1>🔥 Pro Quiz App</h1>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>

        {showResult ? (
          <div className="result-box">
            <h2>🎉 Quiz Finished</h2>

            <div className="score-circle">
              {Math.round((score / questions.length) * 100)}%
            </div>

            <h3>
              Score: {score}/{questions.length}
            </h3>

            <p>🏆 High Score: {highScore}</p>

            <p>🪙 Coins Earned: {coins}</p>

            <button onClick={restartQuiz}>
              🔄 Play Again
            </button>
          </div>
        ) : (
          <>
            <div className="top-info">
              <div>❤️ Lives: {lives}</div>

              <div className="timer">
                ⏳ {timer}s
              </div>

              <div>🪙 {coins}</div>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${
                    ((currentQuestion + 1) / questions.length) * 100
                  }%`,
                }}
              ></div>
            </div>

            <h2 className="question">
              {questions[currentQuestion].question}
            </h2>

            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${
                    selected === option
                      ? option === questions[currentQuestion].answer
                        ? "correct"
                        : "wrong"
                      : ""
                  }`}
                  onClick={() => handleAnswer(option)}
                  disabled={selected}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              className="next-btn"
              onClick={handleNext}
              disabled={!selected}
            >
              Next →
            </button>
          </>
        )}
      </div>
    </div>
  );
}