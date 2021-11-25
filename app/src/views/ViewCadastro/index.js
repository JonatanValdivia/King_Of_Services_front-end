import { FormContainer } from "../../pages/CadastroCliente/style";
import api from "../../services/api";
import apiCep from "../../services/apiCep";
import InputMask from "react-input-mask";
import { Component, useEffect, useState } from 'react';

function ViewCadastro1() {

    const [nome, setNome] = useState("");
    const [idSexo, setIdSexo] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirm, setSenhaConfirm] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cep, setCep] = useState("");
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [validation, setValidation] = useState(false);
    const foto = null;

    const dataNascimentoHandler = (event) => {
        setDataNascimento(event.target.value);
    }

    const telefoneHandler = (event) => {
        setTelefone(event.target.value);
    }

    const senhaHandler = (event) => {
        setSenha(event.target.value);
    }

    const senhaConfirmHandler = (event) => {
        setSenhaConfirm(event.target.value);
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
        document.getElementsByClassName('dadosPessoais')[0].style.display = "none";
        document.getElementsByClassName('endereco')[0].style.display = "block";

    }

    const resultadoPositivo = () =>{
        const resultadoPositivo = document.getElementById('resultadoPositivo');
        resultadoPositivo.style.display = 'flex';
        setTimeout(() => {
            resultadoPositivo.style.display = 'none';
        }, 5000);
    }

    const resultadoNegativo = () =>{
        const resultadoNegativo = document.getElementById('resultadoNegativo');
        resultadoNegativo.style.display = 'flex';
        const timer = setTimeout(() => {
            resultadoNegativo.style.display = 'none';
        }, 5000);
    }

    const clear = () =>{
        setNome(''); setIdSexo(''); setEmail(''); setSenha(''); setSenhaConfirm(''); setTelefone(''); setDataNascimento(''); setCep(''); setUf(''); setCidade(''); setBairro(''); setRua(''); setNumero(''); setComplemento('');
    }

    const validationFunction = () =>{
        if(nome || email || senha || senhaConfirm || telefone || dataNascimento || cep || uf || cidade || bairro || rua || numero || complemento  === null && senha != senhaConfirm){
            setValidation(false);
            return validation;
        }else{
            setValidation(true)
            return validation;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(nome || email || senha || senhaConfirm || telefone || dataNascimento || cep || uf || cidade || bairro || rua || numero || complemento  === null && senha != senhaConfirm){
            api.post("http://kingofservices.com.br/Clientes", { idSexo, nome, email, senha, telefone, dataNascimento, foto, uf, cidade, bairro, rua, numero, complemento, cep }).then(() => {
                resultadoPositivo();
                clear();
            }).catch(() =>{
                resultadoNegativo();
            })
        }else{
            resultadoNegativo();
        }
    }

    const back = () => {
        document.getElementsByClassName('dadosPessoais')[0].style.display = "block";
        document.getElementsByClassName('endereco')[0].style.display = "none";
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <section className="dadosPessoais">
                    <input placeholder="Nome" value={nome} onChange={nomeHandler} />
                    <input type="email" placeholder="Email" value={email} onChange={emailHandler} />
                    <input type="password" placeholder="Senha" value={senha} onChange={senhaHandler} required/>
                    <input type="password" placeholder="Confirmar senha" value={senhaConfirm} onChange={senhaConfirmHandler} required/>
                    <InputMask mask="(99) 99999-9999" placeholder="telefone" value={telefone} onChange={telefoneHandler}/>
                    <input placeholder="Data de nascimento" value={dataNascimento} onChange={dataNascimentoHandler} />
                    <label>Selecione o seu gênero:</label>
                    <div onChange={valorGenero}>
                        <input type="radio" value="1" name="gender" /> Masculino
                        <input type="radio" value="2" name="gender" /> Feminino
                        <input type="radio" value="3" name="gender" /> Outro
                    </div>
                    <button type='button' onClick={() => ocultModal()}>Próximo</button>
                </section>
                <section className="endereco">
                    <input type="number" placeholder="Cep" value={cep} onChange={cepHandler} onBlur={() => buscarCep(cep)} />
                    <input placeholder="UF" value={uf} onChange={ufHandler} />
                    <input placeholder="Cidade" value={cidade} onChange={cidadeHandler} />
                    <input placeholder="Bairro" value={bairro} onChange={bairroHandler} />
                    <input placeholder="Rua" value={rua} onChange={ruaHandler} />
                    <input placeholder="Número" value={numero} onChange={numeroHandler} />
                    <input placeholder="Complemento (opcional)" value={complemento} onChange={complementoHandler} />
                    <button type='submit' onClick={(event) => handleSubmit(event)}>Cadastrar</button>
                    <p onClick={back}>voltar</p>
                    <aside id="resultadoPositivo">
                        <p>
                            Cadastro executado com sucesso!   
                        </p>    
                    </aside>
                    <aside id="resultadoNegativo">
                        <p>
                            Não foi possível realizar o cadastro. Verifique se todos os dados estão corretos
                        </p>    
                    </aside>  
                </section>
            </form>
        </FormContainer>
    );
}

export default ViewCadastro1;