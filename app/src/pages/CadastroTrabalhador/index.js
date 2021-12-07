import BannerCadastro from "../../components/BannerCadastro";
import Header from "../../components/Header";
import { ArticleCadastro, Button, ContainerAction, ContainerButton, ContainerHabilidades, Crud, CrudInformation, Habilidades, ImgProfileStyle, Inputs, Separador } from "./style";
import ImgProfile from "../../assets/Profile.png";
import Footer from "../../components/Rodape";
import api from '../../services/api';
import InputMask from "react-input-mask";
import apiCep from '../../services/apiCep';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

function CadastroTrabalhador(){
    const [profissao, setProfissao] = useState([]);
    const login = localStorage.getItem('login') ?? false;

    useEffect (() => {
            api.get('Profissoes').then(({data}) =>{
                setProfissao(data);
            }).catch(() =>{
                
            })
    }, []);

    const [foto, setFoto] = useState(""); 
    const [idProfissao, setIdProfissao] = useState('');
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cep, setCep] = useState("");
    const [nome, setNome] = useState("");
    const [idSexo, setIdSexo] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirm, setSenhaConfirm] = useState("");
    const [descricao, setDescricao] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setdataNascimento] = useState("");

    const dataNascimentoHandler = event =>{
        setdataNascimento(event.target.value)
    }

    const telefoneHandler = event =>{
        setTelefone(event.target.value)
    }

    const descricaoHandler = event =>{
        setDescricao(event.target.value)
    }

    const senhaHandler = event =>{
        setSenha(event.target.value)
    }

    const senhaConfirmHandler = event =>{
        setSenhaConfirm(event.target.value);
    }

    const emailHandler = event =>{
        setEmail(event.target.value)
    }

    const nomeHandler = event =>{
        setNome(event.target.value)
    }

    const cepHandler = event =>{
        setCep(event.target.value)
    }

    const complementoHandler = event =>{
        setComplemento(event.target.value)
    }

    const numeroHandler = event =>{
        setNumero(event.target.value)
    }

    const ruaHandler = event =>{
        setRua(event.target.value)
    }

    const bairroHandler = event =>{
        setBairro(event.target.value)
    }

    const cidadeHandler = event =>{
        setCidade(event.target.value)
    }

    const ufHandler = event =>{
        setUf(event.target.value)
    }

    const fotoHandler = (e) =>{
        let fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = (event) => {
            setFoto(event.target.result)   
        }
    }

    const valorGenero = (event) =>{
        setIdSexo(event.target.value)
    }

    const resultadoPositivo = () =>{
        const resultadoPositivo = document.getElementById('resultadoPositivo');
        resultadoPositivo.style.display = 'flex';
        const timer = setTimeout(() => {
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
        setNome(''); setCep(''); setUf(''); setCidade(''); setBairro(''); setRua(''); setNumero(''); setComplemento(''); setEmail(''); setSenha(''); setSenhaConfirm(''); setDescricao(''); setTelefone(''); setdataNascimento('');
    }

    const handleDropDown = (event) =>{
        setIdProfissao(event) 
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(nome || email || senha || descricao || senhaConfirm || telefone || dataNascimento || cep || uf || cidade || bairro || rua || numero != '' && senha === senhaConfirm){
            api.post("http://kingofservices.com.br/Prestadores", {idProfissao, idSexo, nome, email, senha, descricao, telefone, dataNascimento, foto, uf, cidade, bairro, rua, numero, complemento, cep}).then(() =>{   
                resultadoPositivo();
                clear();
            }).catch(() => resultadoNegativo())    
        }else{
            console.log(nome, email, senha, descricao, senhaConfirm, telefone, dataNascimento, cep, uf, cidade, bairro, rua, numero);
            resultadoNegativo() 
        }
    }

    const buscarCep = cep =>{
        apiCep.get(`${cep}/json/`).then(({data}) => {
            setUf(data.uf);
            setCidade(data.localidade);
            setBairro(data.bairro);
            setRua(data.logradouro);
        });
    }

    return(
        <>
            <Helmet>
                <title>King of Services</title>
            </Helmet>
            { login ? <div/> : <Header/> } 
            <BannerCadastro/>
            <ArticleCadastro>
                <ImgProfileStyle>
                    <img src={ImgProfile}/>
                </ImgProfileStyle>
                <ContainerButton>
                    <label for='foto'>Selecione uma foto &#187;</label>
                    <input type="file" id="foto" accept="image/*" onChange={e => fotoHandler(e)}/>
                </ContainerButton>
                <Inputs>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Nome completo" value={nome} onChange={nomeHandler} />
                        <label>Selecione o seu gênero:</label>
                        <div onChange={valorGenero}>
                            <input type="radio" value="1" name="gender" /> Masculino
                            <input type="radio" value="2" name="gender" /> Feminino
                            <input type="radio" value="3" name="gender" /> Outro
                        </div>
                        <select placeholder="Selecione sua profissao" onChange={e => handleDropDown(e.target.value)}>
                            <option key='0' value='0'>
                                Selecione sua profissão
                            </option>
                            {profissao.map(element => {
                                return( 
                                    <option key={element.idProfissao} value={element.idProfissao}>
                                        {element.nomeProfissao}
                                    </option>
                                );
                            })}
                            
                        </select>

                        <p>Endereço</p>
                        <input placeholder="cep" value={cep} onChange={cepHandler} onBlur={() => {buscarCep(cep)}} />
                        <input placeholder="Uf" value={uf} onChange={ufHandler} />
                        <input placeholder="Cidade" value={cidade} onChange={cidadeHandler} />
                        <input placeholder="Bairro" value={bairro} onChange={bairroHandler} />
                        <input placeholder="Rua" value={rua} onChange={ruaHandler} />
                        <input placeholder="Número" value={numero} onChange={numeroHandler} />
                        <input placeholder="Complemento (opcional)" value={complemento} onChange={complementoHandler}/>
                        <input type="email" placeholder="E-mail" value={email} onChange={emailHandler} />
                        <input type="password" placeholder="Senha" value={senha} onChange={senhaHandler} />
                        <input type="password" placeholder="Confirmar senha" value={senhaConfirm} onChange={senhaConfirmHandler} />
                        <p>Descrição</p>
                        <textarea placeholder="Escreva um pouco sobre você e com o que você trabalha... (descrição)" value={descricao} onChange={descricaoHandler} ></textarea>
                        <InputMask mask="(99) 99999-9999" placeholder="Número de celular" value={telefone} onChange={telefoneHandler} />
                        <InputMask mask="99/99/9999" placeholder="Data de nascimento" value={dataNascimento} onChange={dataNascimentoHandler} />
                        <Button>
                            <button type="submit" onClick={(event) => handleSubmit(event)}>Cadastrar-se</button>
                        </Button>     
                        <div id="resultadoPositivo">
                            <p>
                                Cadastro executado com sucesso!   
                            </p>    
                        </div>
                        <div id="resultadoNegativo">
                            <p>
                                Não foi possível realizar o cadastro. Verifique se todos os dados estão corretos!
                            </p>    
                        </div>                   
                    </form>                    
                </Inputs>
                <Footer/>
            </ArticleCadastro>
        </>
    );
}

export default CadastroTrabalhador;