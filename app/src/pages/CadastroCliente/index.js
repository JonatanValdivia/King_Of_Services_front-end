import Input from "../../components/Input";
import { Container, FormContainer } from "./styles";
import imgLogo from "../../assets/Leão.png";
import api from "../../services/api";
import InputMask from "react-input-mask";
import {useEffect, useState} from 'react';

function CadastroCliente(){
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [telefone, setTelefone] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [cep, setCep] = useState();
    const [uf, setUf] = useState();
    const [cidade, setCidade] = useState();
    const [bairro, setBairro] = useState();
    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [complemento, setComplemento] = useState();
    
    const complementoHandler = (event) =>{
        setComplemento(event.target.value);
    }
    
    const numeroHandler = (event) =>{
        setNumero(event.target.value);
    }
    
    const ruaHandler = (event) =>{
        setRua(event.target.value);
    }
    
    const bairroHandler = (event) =>{
        setBairro(event.target.value);
    }
    
    const cidadeHandler = (event) =>{
        setCidade(event.target.value);
    }
    
    const ufHandler = (event) =>{
        setUf(event.target.value);
    }
    
    const cepHandler = (event) =>{
        setCep(event.target.value);
    }
    
    const dataNascimentoHandler = (event) =>{
        setDataNascimento(event.target.value);
    }

    const telefoneHandler = (event) =>{
        setTelefone(event.target.value);
    }
    
    const senhaHandler = (event) =>{
        setSenha(event.target.value);
    }
    
    const emailHandler = (event) =>{
        setEmail(event.target.value);
    }
    const nomeHandler = (event) =>{
        setNome(event.target.value);
    }


    return(
        <Container>
        <FormContainer>
            <img src={imgLogo}/>
            <h1>King of Services</h1>

            <button id="facebook">Facebook</button>
            <button id="Google">Google</button>
            <hr/>
            {/* 
                {
                    "idSexo" : 1,
                    "foto" : "010101010",
                }
            */}
            <input placeholder="Nome" value={nome} onChange={nomeHandler}/>
            <input placeholder="Email" value={email} onChange={emailHandler}/>
            <input placeholder="Senha" value={senha} onChange={senhaHandler}/>
            <InputMask mask="(99)99999-9999" placeholder="telefone" value={telefone} onChange={telefoneHandler}/>
            <input placeholder="Data de nascimento" value={dataNascimento} onChange={dataNascimentoHandler}/>
            <input placeholder="Cep" value={cep} onChange={cepHandler}/>
            <input placeholder="Uf" value={uf} onChange={ufHandler}/>
            <input placeholder="Cidade" value={cidade} onChange={cidadeHandler}/>
            <input placeholder="Bairro" value={bairro} onChange={bairroHandler}/>
            <input placeholder="Rua" value={rua} onChange={ruaHandler}/>
            <input placeholder="Número" value={numero} onChange={numeroHandler}/>
            <input placeholder="Complemento (opcional)" value={complemento} onChange={complementoHandler}/>

           <button>Entrar</button>
           <hr/>

            <p>Você já é cadastrado? Entrar</p>

        </FormContainer>
    </Container>

    );

}

export default CadastroCliente;