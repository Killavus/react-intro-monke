import { useState, useEffect } from "react";

type TimerProps = {
  name: string;
};

function formatTime(secondsElapsed: number): string {
  const minutesElapsed = String(Math.floor(secondsElapsed / 60));
  const seconds = String(secondsElapsed % 60);

  return `${minutesElapsed.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
}

const Timer = ({ name }: TimerProps) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [started, toggleStarted] = useState(false);

  const toggleState = () => {
    toggleStarted((state) => !state);
  };

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    console.log("running effect");

    if (started) {
      intervalId = setInterval(() => {
        setSecondsElapsed((oldSeconds) => oldSeconds + 1);
      }, 1000);
    }

    return () => {
      console.log("cleaning up");
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [started]);

  return (
    <article className="timerAppTimer">
      <h1>{name}</h1>
      <p>{formatTime(secondsElapsed)}</p>
      <section className="timerAppTimerControls">
        <button onClick={toggleState}>{started ? "Pause" : "Start"}</button>
      </section>
    </article>
  );
};

export default Timer;
