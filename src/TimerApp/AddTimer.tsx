import { useState } from "react";

type AddTimerProps = {
  onAddTimer(name: string): void;
};

const AddTimer = ({ onAddTimer }: AddTimerProps) => {
  const [name, setName] = useState("");

  return (
    <form
      className="timerAppForm"
      onSubmit={(event) => {
        event.preventDefault();
        onAddTimer(name);
        setName("");
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default AddTimer;
