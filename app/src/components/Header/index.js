import { Container, Menu, TextRegister } from "./style";
import imgLogo from "../../assets/Logo.png";
import { useState } from 'react';

function Header() {
    let [ open, setOpen ] = useState(false);
    
    const openMenu = () => {
        const menu = document.getElementById('menu');
        const register = document.getElementById('register');
        if(open == false){
            menu.classList.add('open')
            setOpen(true);
        }else{
            menu.classList.remove('open')
            setOpen(false);
        }
    }

    return (
        <Container>
            { open ? <i onClick={openMenu} className="fa fas fa-window-close"></i> : <i onClick={openMenu} className="fa fas fa-bars"></i> } 
            <a href="/">
                <img src={imgLogo} />
            </a>
            <Menu id="menu">
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
                    <li>
                        <a href="/cadastro">
                            <TextRegister id="register">
                                Cadastre-se
                            </TextRegister>
                        </a>
                    </li>
                </ul>
            </Menu>
        </Container>
    );
}

export default Header;