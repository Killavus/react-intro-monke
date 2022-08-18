import { useState } from "react";
import AddTimer from "./AddTimer";
import Timers from "./Timers";

const TimerApp = () => {
  const [timers, setTimers] = useState<string[]>([]);
  const onAddTimer = (name: string) => {
    setTimers((timers) => [...timers, name]);
  };

  return (
    <main className="timersApp">
      <Timers timers={timers} />
      <AddTimer onAddTimer={onAddTimer} />
    </main>
  );
};

export default TimerApp;
