import CounterDisplay from "../CounterDisplay";
import { Container } from "./StatDisplay.styles";

const Header = () => {
  return (
    <Container>
      <CounterDisplay
        icon="bi bi-heart-fill"
        value="10/50"
        color="#FF5F6C"
        backgroundColor="#FFDBDC"
      />

      <CounterDisplay
        icon="bi bi-coin"
        value="9,999,999"
        color="#FFA35C"
        backgroundColor="#FFE799"
      />

      <CounterDisplay
        icon="bi bi-gem"
        value="150"
        color="#21AEF4"
        backgroundColor="#C6F7FD"
      />
    </Container>
  );
};

export default Header;
