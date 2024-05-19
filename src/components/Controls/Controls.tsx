import {
  ControlsStyled,
  Button,
  LeftButtons,
  RightButtons,
} from "./Controls.styles.tsx";

interface ControlsProps {
  resetToInitialPosition?: () => void; // Define the type of the prop
  finish?: () => void; // Define the type of the prop
  onNextMapClick?: () => void;
  navigateToHome?: () => void;
}

const Controls = ({
  resetToInitialPosition,
  finish,
  onNextMapClick,
  navigateToHome,
}: ControlsProps) => {
  return (
    <ControlsStyled>
      <LeftButtons>
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
        <Button backgroundColor="#2A8AE9" onClick={navigateToHome}>
          <i className="bi bi-box-arrow-left"></i>
        </Button>
      </LeftButtons>

      <RightButtons>
        <Button
          backgroundColor="#2A8AE9"
          borderColor="#fff"
          onClick={finish}
          width={300}
          height={50}
          borderRadius={1}
        >
          <span style={{ fontSize: "1rem" }}>
            <i style={{paddingRight: "5px"}} className="bi bi-check-circle"></i>
            Confirm
          </span>
        </Button>
      </RightButtons>
    </ControlsStyled>
  );
};

export default Controls;
