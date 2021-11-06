import { Container, Menu, TextRegister } from "./style";
import { Link, Redirect } from "react-router-dom";

import imgLogo from "../../assets/Logo.png";


function Header(){
    return (
        <Container>
            <img src={imgLogo}/>

            <Menu>
                <ul>
                    <li>
                        <a>
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a>
                            Trabalhe conosco
                        </a>
                    </li>
                    <li>
                        <a>
                            Sobre nós
                        </a>
                    </li>
                    <li>
                        <a href="/login">
                            Entrar
                        </a>
                    </li>
                </ul>
                
            </Menu>
            <a href="/cadastro">
                <TextRegister>
                    Cadastre-se
                </TextRegister>
            </a>
        </Container>
    );
}

export default Header;