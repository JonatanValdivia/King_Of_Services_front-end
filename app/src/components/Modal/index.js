import { ContainerUl, ModalContainer, Overlay, Title } from "./style";

import imgLocal from "../../assets/local.png"
import Input from "../Input";


function Modal(props){
    return(
        <Overlay>
            <Title>
                <h1>Seja um lider no seu serviço!</h1>
                <p>Encontre os melhores prestadores de serviços próximo a você.</p>
            </Title>
            <ModalContainer props>
                <ContainerUl>
                    
                    <ul>
                        <li>
                            <img src={imgLocal} />
                            Localização atual
                        </li>
                        <li>São Paulo</li>
                        <li>Barueri</li>
                        <li>Alphaville</li>
                        <li>Morumbi</li>
                    </ul>
                </ContainerUl>
                <Input/>
            </ModalContainer>
        </Overlay>
    );
}

export default Modal;