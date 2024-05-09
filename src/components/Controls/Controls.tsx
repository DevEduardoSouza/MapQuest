import { ControlsStyled, Button } from "./Controls.styles.tsx";

interface ControlsProps {
  resetToInitialPosition: () => void; // Define the type of the prop
}

const Controls = ({ resetToInitialPosition }: ControlsProps) => {
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
      <Button backgroundColor="#2A8AE9">
        <i className="bi bi-exclamation-triangle"></i>
      </Button>
      <Button backgroundColor="#2A8AE9">
        <i className="bi bi-box-arrow-left"></i>
      </Button>
    </ControlsStyled>
  );
};

export default Controls;
