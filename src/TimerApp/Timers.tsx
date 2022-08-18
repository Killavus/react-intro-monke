import Timer from "./Timer";

type TimersProps = {
  timers: string[];
};

const Timers = ({ timers }: TimersProps) => (
  <article className="timerAppTimers">
    {timers.map((timer) => (
      <Timer key={timer} name={timer} />
    ))}
  </article>
);

export default Timers;
