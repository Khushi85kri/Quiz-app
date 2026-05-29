export default function Category({ setStart }) {
  return (
    <div className="category-box">
      <h2>Select Category</h2>

      <button onClick={() => setStart(true)}>
        🚀 Start Quiz
      </button>
    </div>
  );
}