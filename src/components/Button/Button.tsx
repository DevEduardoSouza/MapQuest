import { ButtonStyled } from "./Button.styles";

interface ButtonProps {
  backgroundColor: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ backgroundColor, children, onClick }: ButtonProps) => {
  return (
    <ButtonStyled backgroundColor={backgroundColor} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
