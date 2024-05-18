import Button from "../Button";
import {
  Container,
  ModalHeader,
  ModalStyled,
  ModalBody,
  ModalFooter,
} from "./Modal.styles";

interface ModalProps {
  title: string;
  msg: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

const Modal = ({ title, msg, onClose, onConfirm }: ModalProps) => {
  return (
    <Container>
      <ModalStyled>
        <ModalHeader>
          <h2>{title}</h2>
          <button>
            <i className="bi bi-x-circle"></i>
          </button>
        </ModalHeader>
        <ModalBody>
          <p>{msg}</p>
        </ModalBody>

        <ModalFooter>
          <Button backgroundColor="#FE7075" onClick={onConfirm}>
            Sair
          </Button>
          <Button backgroundColor="#2AED82" onClick={onClose}>
            Ficar
          </Button>
        </ModalFooter>
      </ModalStyled>
    </Container>
  );
};

export default Modal;
