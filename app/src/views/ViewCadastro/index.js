import { FormContainer } from "../../pages/CadastroCliente/style";
import api from "../../services/api";
import apiCep from "../../services/apiCep";
// import InputMask from "react-input-mask";
import { Component, useEffect, useState } from 'react';

function ViewCadastro1() {

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


    const dataNascimentoHandler = (event) => {
        setDataNascimento(event.target.value);
    }

    const telefoneHandler = (event) => {
        setTelefone(event.target.value);
    }

    const senhaHandler = (event) => {
        setSenha(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const nomeHandler = (event) => {
        setNome(event.target.value);
    }

    const valorGenero = (event) => {
        setIdSexo(event.target.value)
    }

    const foto = 1010100;

    const complementoHandler = (event) => {
        setComplemento(event.target.value);
    }

    const numeroHandler = (event) => {
        setNumero(event.target.value);
    }

    const ruaHandler = (event) => {
        setRua(event.target.value);
    }

    const bairroHandler = (event) => {
        setBairro(event.target.value);
    }

    const cidadeHandler = (event) => {
        setCidade(event.target.value);
    }

    const ufHandler = (event) => {
        setUf(event.target.value);
    }

    const cepHandler = (event) => {
        setCep(event.target.value);
    }

    const buscarCep = cep => {
        apiCep.get(`${cep}/json/`).then(({ data }) => {
            setUf(data.uf);
            setCidade(data.localidade);
            setBairro(data.bairro);
            setRua(data.logradouro);
        });
    }

    const ocultModal = () => {
        const formDadosPessoais = document.getElementsByClassName('dadosPessoais')[0].style.display = "none";
        const formEndereco = document.getElementsByClassName('endereco')[0].style.display = "block";

        formEndereco.style.animation = "go-back 1s";

    }

    const handleSubmit = () => {
        api.post("http://kingofservices.com.br/Clientes", { idSexo, nome, email, senha, telefone, dataNascimento, foto, uf, cidade, bairro, rua, numero, complemento, cep });
    }

    const back = () => {
        const formDadosPessoais = document.getElementsByClassName('dadosPessoais')[0].style.display = "block";
        const formEndereco = document.getElementsByClassName('endereco')[0].style.display = "none";
    }


    return (
        <FormContainer>
            <form onsubmit="return false" className="dadosPessoais">
                <input placeholder="Nome" value={nome} onChange={nomeHandler} />

                <input placeholder="Email" value={email} onChange={emailHandler} />
                <input placeholder="Senha" value={senha} onChange={senhaHandler} />
                {/* <InputMask mask="(99) 99999-9999" placeholder="telefone" value={telefone} onChange={telefoneHandler}/> */}
                <input placeholder="Data de nascimento" value={dataNascimento} onChange={dataNascimentoHandler} />

                <label>Selecione o seu gênero:</label>
                <div onChange={valorGenero}>
                    <input type="radio" value="1" name="gender" /> Masculino
                    <input type="radio" value="2" name="gender" /> Feminino
                    <input type="radio" value="3" name="gender" /> Outro
                </div>

                <button type='button' onClick={() => ocultModal()}>Próximo</button>
            </form>

            <form onsubmit="return false" className="endereco">

                <input placeholder="Cep" value={cep} onChange={cepHandler} onBlur={() => buscarCep(cep)} />
                <input placeholder="UF" value={uf} onChange={ufHandler} />
                <input placeholder="Cidade" value={cidade} onChange={cidadeHandler} />
                <input placeholder="Bairro" value={bairro} onChange={bairroHandler} />
                <input placeholder="Rua" value={rua} onChange={ruaHandler} />
                <input placeholder="Número" value={numero} onChange={numeroHandler} />
                <input placeholder="Complemento (opcional)" value={complemento} onChange={complementoHandler} />
                <button type='button' onClick={() => handleSubmit()}>Cadastrar</button>
                <p onClick={back}>voltar</p>

            </form>


        </FormContainer>
    );
}

export default ViewCadastro1;