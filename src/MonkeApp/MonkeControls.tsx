type ControlsProps = {
  onYes(): void;
  onNo(): void;
};

const MonkeControls = ({ onYes, onNo }: ControlsProps) => {
  const handleYes: React.MouseEventHandler = (event) => {
    event.preventDefault();
    onYes();
  };

  const handleNo: React.MouseEventHandler = (event) => {
    event.preventDefault();
    onNo();
  };

  return (
    <nav className="monkeControls">
      <button className="monkeYes" onClick={handleYes}>
        Miut
      </button>
      <button className="monkeNo" onClick={handleNo}>
        Smrut
      </button>
    </nav>
  );
};

export default MonkeControls;
