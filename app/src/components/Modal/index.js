import { ModalContainer, Overlay, Title } from "./style";

function Modal(){
    return(
        <Overlay>
            <Title>
                <h1>Seja um lider no seu serviço!</h1>
                <p>Encontre os melhores prestadores de serviços próximo a você.</p>
            </Title>
            <ModalContainer>
                Teste
            </ModalContainer>
        </Overlay>
    );
}

export default Modal;