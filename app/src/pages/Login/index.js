import { ContainerButton, ContainerInputs, ContainerLogin, Logo, Overlay, Tittle } from "./style";
import imgLogo from "../../assets/Leão.png";
import api from '../../services/api';
import {useEffect, useState} from 'react';


function Login(){
    const [email, setemail] = useState("");
    const [senha, setSenha] = useState("");

    const emailHandler = (event) =>{
        setemail(event.target.value);
    }

    const senhaHandler = (event) =>{
        setSenha(event.target.value);
    }

    const handleSubmit = () =>{
        api.post('http://kingofservices.com.br/Logins', {email, senha}).then(({data}) =>{
            console.log(data);
        });
    }

    return(
        <Overlay>
            <ContainerLogin>
                <Logo>
                    <img src={imgLogo}/>
                </Logo>
                <Tittle>
                    <h1>King of Sevices</h1>
                </Tittle>
                <ContainerInputs>
                    <input placeholder="Email" value={email} onChange={emailHandler}/>
                    <input placeholder="Senha" value={senha} onChange={senhaHandler}/>
                </ContainerInputs>
                <ContainerButton>
                    <button onClick={handleSubmit}>Entrar</button>
                </ContainerButton>
            </ContainerLogin>
        </Overlay>
    );
}

export default Login;