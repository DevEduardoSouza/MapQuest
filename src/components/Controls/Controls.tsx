import { ControlsStyled } from "./Controls.styles.tsx";

interface ControlsProps {
  resetToInitialPosition: () => void; // Define the type of the prop
}

const Controls = ({ resetToInitialPosition }: ControlsProps) => {
  return (
    <ControlsStyled>
      <button id="initPosition" onClick={resetToInitialPosition}>
        <i className="bi bi-flag-fill"></i>
      </button>
      <button>
        <i className="bi bi-flag-fill"></i>
      </button>
    </ControlsStyled>
  );
};

export default Controls;
