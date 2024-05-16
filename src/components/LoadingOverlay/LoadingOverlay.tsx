import {
  ImageBattle,
  Loader,
  LoaderContainer,
  Overlay,
  Text,
  Button,
} from "./LoadingOverlay.styles";

import IconBattle from "../../assets/icons/battle-icon.png";

const LoadingOverlay = () => {
  return (
    <Overlay>
      <LoaderContainer>
        <Loader />
        <ImageBattle src={IconBattle} />
      </LoaderContainer>
      <Text>Looking for a match...</Text>
      <Button title="Return">
        <i className="bi bi-box-arrow-left"></i>
      </Button>
    </Overlay>
  );
};

export default LoadingOverlay;
