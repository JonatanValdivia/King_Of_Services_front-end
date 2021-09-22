import Logo from "../Logo";
import Titulo from "../Titulo";
import { ModalContainer, Overlay } from "./style";

function Modal() {
  return (
      <>
    <Overlay>
      <ModalContainer>
          <Logo/>
          <Titulo/>
      </ModalContainer>
    </Overlay>
    </>
  );
}

export default Modal;
