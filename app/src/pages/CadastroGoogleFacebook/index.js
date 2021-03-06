import Input from "../../components/Input";
import { Container, FormContainer } from "./styles";
import imgLogo from "../../assets/Leão.png";
import api from "../../services/api";
import apiCep from "../../services/apiCep";
// import InputMask from "react-input-mask";
import {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';

function CadastroFacebookGoogle(){
    const [nome, setNome] = useState("");
    const [idSexo, setIdSexo] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cep, setCep] = useState("");
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    
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

    const buscarCep = cep =>{
        apiCep.get(`${cep}/json/`).then(({data}) => {
            setUf(data.uf);
            setCidade(data.localidade);
            setBairro(data.bairro);
            setRua(data.logradouro);
        });
    }

    const valorGenero = (event) =>{
        setIdSexo(event.target.value)
    }

    const foto = 1010100;

    const handleSubmit = () =>{
        api.post("http://kingofservices.com.br/Clientes", {idSexo, nome, email, senha, telefone, dataNascimento, foto, uf, cidade, bairro, rua, numero, complemento, cep});
    }


    return(
        <>
            <Helmet>
                <title>King of Services</title>
            </Helmet>
            <Container>
                <FormContainer>
                    <img src={imgLogo}/>
                    <h1>King of Services</h1>

                    <button id="facebook">Facebook</button>
                    <button id="Google">Google</button>
                    <hr/>

                    <p>Você já é cadastrado? Entrar</p>

                </FormContainer>
            </Container>
        </>
    );
}

export default CadastroFacebookGoogle;