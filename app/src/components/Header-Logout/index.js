import { Container, ContentIcon, Menu, Profile, Submenu, TextRegister } from "./style";
import { IoIosArrowDown } from 'react-icons/io'
import { useHistory } from 'react-router-dom';
import imgLogo from "../../assets/Logo.png";
import { useState } from "react";

function HeaderLogout() {

    let [ open, setOpen ] = useState(false);
    let history = useHistory(); 
    
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

    var invisible = 1

    const ocultSubmenu = () => {
        if(invisible == 1){
            const submenu = document.getElementById("submenu").style.visibility="visible";
            invisible = 0
        }else{
            const submenu = document.getElementById("submenu").style.visibility = "hidden"
            invisible = 1
        }
    }

    const logout = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('login');
        history.push('/login');
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
                        <a href="/meusservicos">
                            Meus Serviços
                        </a>
                    </li>
                    <li>
                        <a>
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a href="/cadastrotrabalhador">
                            Trabalhe conosco
                        </a>
                    </li>
                    <li>
                        <a>
                            Sobre nós
                        </a>
                    </li>
                    <li>
                        <div>
                            <TextRegister>
                                <Profile />
                                <p>
                                    Fulaninho
                                </p>
                                <ContentIcon onClick={ocultSubmenu}>
                                    <IoIosArrowDown />
                                </ContentIcon>
                            </TextRegister>
                            <Submenu id="submenu">
                                <ul>
                                    <li>
                                        <a href="/perfil">
                                            Meu perfil
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/editar">
                                            Editar meu perfil
                                        </a>
                                    </li>
                                    <li onClick={logout}>Logout</li>
                                </ul>
                            </Submenu>
                        </div>
                    </li>
                </ul>
            </Menu>
        </Container>
    );
}

export default HeaderLogout;