import { motion } from "framer-motion";

export default function QuestionCard({
  question,
  handleAnswer,
  selected,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="question">
        {question.question}
      </h2>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`option-btn ${
              selected === option
                ? option === question.answer
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            disabled={selected}
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
}