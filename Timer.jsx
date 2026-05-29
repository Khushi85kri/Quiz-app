import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer({ onComplete }) {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={15}
      colors={["#2563eb", "#f59e0b", "#ef4444"]}
      colorsTime={[15, 7, 0]}
      size={100}
      strokeWidth={8}
      onComplete={onComplete}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
}