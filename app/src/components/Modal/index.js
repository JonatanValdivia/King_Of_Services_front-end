import { ContainerUl, ModalContainer, Overlay, Title } from "./style";

import imgLocal from "../../assets/local.png"
import Input from "../Input";


function Modal(){
    return(
        <Overlay>
            <ModalContainer>
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