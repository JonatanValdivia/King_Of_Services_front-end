import { Container, Menu, TextRegister } from "./style";
import { Link, Redirect } from "react-router-dom";

import imgLogo from "../../assets/Logo.png"

function Header(){
    return (
        <Container>
            <img src={imgLogo}/>

            <Menu>
                <ul>
                    <li>Serviços</li>
                    <li>Trabalhe conosco</li>
                    <li>Sobre nós</li>
                    <li>Entrar</li>
                </ul>
                
            </Menu>
            <TextRegister>
                Cadastre-se
            </TextRegister>
        </Container>
    );
}

export default Header;