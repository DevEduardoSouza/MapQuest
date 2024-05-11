import { ControlsStyled, Button } from "./Controls.styles.tsx";

interface ControlsProps {
  resetToInitialPosition: () => void; // Define the type of the prop
  finish: () => void; // Define the type of the prop
  onNextMapClick: () => void;
}

const Controls = ({
  resetToInitialPosition,
  finish,
  onNextMapClick,
}: ControlsProps) => {
  return (
    <ControlsStyled>
      <Button
        id="initPosition"
        onClick={resetToInitialPosition}
        backgroundColor="#2A8AE9"
      >
        <i className="bi bi-flag-fill"></i>
      </Button>
      <Button
        backgroundColor="#2A8AE9"
        className="gm-control-active gm-fullscreen-control"
      >
        <i className="bi bi-fullscreen"></i>
      </Button>
      <Button backgroundColor="#2A8AE9" onClick={onNextMapClick}>
        <i className="bi bi-exclamation-triangle"></i>
      </Button>
      <Button backgroundColor="#2A8AE9" onClick={finish}>
        <i className="bi bi-box-arrow-left"></i>
      </Button>
    </ControlsStyled>
  );
};

export default Controls;
