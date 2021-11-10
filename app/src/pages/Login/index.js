import { ContainerButton, ContainerInputs, ContainerLogin, ContentIcon, Logo, Overlay, Tittle } from "./style";
import imgLogo from "../../assets/Leão.png";
import api from '../../services/api';
import { useState } from 'react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


function Login() {
    const [email, setemail] = useState("");
    const [senha, setSenha] = useState("");

    const emailHandler = (event) => {
        setemail(event.target.value);
    }

    const senhaHandler = (event) => {
        setSenha(event.target.value);
    }

    const handleSubmit = () => {
        api.post('http://kingofservices.com.br/Logins', { email, senha }).then(({ data }) => {
            console.log(data);
        });
    }

    return (
        <Overlay>
            <ContainerLogin>

                <ContentIcon>
                    <a href="/">
                    <BsFillArrowLeftCircleFill color="#ff7a00" size="25px" cursor="pointer"/>
                    </a>
                </ContentIcon>

                <Logo>
                    <img src={imgLogo} />
                </Logo>
                <Tittle>
                    <h1>King of Sevices</h1>
                </Tittle>
                <ContainerInputs>
                    <input placeholder="Email" value={email} onChange={emailHandler} />
                    <input placeholder="Senha" value={senha} onChange={senhaHandler} />
                </ContainerInputs>
                <ContainerButton>
                    <button onClick={handleSubmit}>Entrar</button>
                </ContainerButton>
            </ContainerLogin>
        </Overlay>
    );
}

export default Login;