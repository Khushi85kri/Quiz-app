export default function Navbar({ darkMode, setDarkMode, coins }) {
  return (
    <div className="navbar">
      <h1>🔥 Pro Quiz App</h1>

      <div className="nav-right">
        <div className="coins">🪙 {coins}</div>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀" : "🌙"}
        </button>
      </div>
    </div>
  );
}