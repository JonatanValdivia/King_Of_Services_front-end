import { Container, ContentIcon, Menu, Profile, Submenu, TextRegister } from "./style";
import { IoIosArrowDown } from 'react-icons/io'

import imgLogo from "../../assets/Logo.png";
import { useState } from "react";

function HeaderLogout() {

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

    return (
        <Container>
            <a href="/">
                <img src={imgLogo} />
            </a>

            <Menu>
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
                </ul>
            </Menu>
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
                        <li>Meu Perfil</li>
                        <hr/>
                        <li>Logout</li>
                    </ul>
                </Submenu>
            </div>
        </Container>
    );
}

export default HeaderLogout;