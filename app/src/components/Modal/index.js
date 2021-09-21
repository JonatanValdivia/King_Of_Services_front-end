import Logo from "../Logo";
import { ModalContainer, Overlay } from "./style";

function Modal() {
  return (
      <>
    <Overlay>
      <ModalContainer>
          <Logo/>
      </ModalContainer>
    </Overlay>
    </>
  );
}

export default Modal;
