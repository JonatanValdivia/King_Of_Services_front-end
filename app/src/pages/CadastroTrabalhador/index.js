import BannerCadastro from "../../components/BannerCadastro";
import Header from "../../components/Header";
import { ArticleCadastro, Button, ContainerAction, ContainerButton, ContainerHabilidades, Crud, CrudInformation, Habilidades, ImgProfileStyle, Inputs, Separador } from "./style";
import ImgProfile from "../../assets/Profile.png";
import Footer from "../../components/Rodape";
import api from '../../services/api';
import InputMask from "react-input-mask";
import apiCep from '../../services/apiCep';
import { useState } from 'react';
import HeaderLogout from "../../components/Hearder-Logout";

function CadastroTrabalhador(){

    const [foto, setFoto] = useState(""); 
    const [nomeProfissao, setnomeProfissao] = useState("");
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

    const nomeProfissaoHandler = (event) =>{
        setnomeProfissao(event.target.value)
    }

    const fotoHandler = (e) =>{
        // setFoto(e.target.files[0])
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
        }, 1500);
    }

    const resultadoNegativo = () =>{
        const resultadoNegativo = document.getElementById('resultadoNegativo');
        resultadoNegativo.style.display = 'flex';
        const timer = setTimeout(() => {
            resultadoNegativo.style.display = 'none';
        }, 1500);
    }

    const idProfissao = 1;

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(senha === senhaConfirm){
            //     api.post("http://kingofservices.com.br/Prestadores", {idProfissao, idSexo, nome, email, senha, descricao, telefone, dataNascimento, foto, uf, cidade, bairro, rua, numero, complemento, cep}).then(({data}) =>{   
            //         console.log(data);
            //     });
            setNome(''); setCep(''); setUf(''); setCidade(''); setBairro(''); setRua(''); setNumero(''); setComplemento(''); setEmail(''); setSenha(''); setSenhaConfirm(''); setDescricao(''); setTelefone(''); setdataNascimento('');
            console.log("Senhas iguais");
            resultadoPositivo()
        }else{
            console.log("As senhas não correspondem!");
            resultadoNegativo();
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
            <Header/>
            <BannerCadastro/>
            <ArticleCadastro>
                <ImgProfileStyle>
                    <img src={ImgProfile}/>
                </ImgProfileStyle>
                <ContainerButton>
                    <label for='foto'>Selecionar um arquivo &#187;</label>
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
                        <input placeholder="Profissão" value={nomeProfissao} onChange={nomeProfissaoHandler}/>
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
                        <InputMask mask="(99) 99999-9999" placeholder="Número de telefone" value={telefone} onChange={telefoneHandler} />
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
                                Não foi possível realizar o cadastro. Verifique se todos os dados estão corretos
                            </p>    
                        </div>                   
                    </form>                    
                </Inputs>
                <ContainerHabilidades>
                    <div>
                        <p>Habilidades</p>
                        <input placeholder="Habilidade"/>
                        <input placeholder="Experiência" id="experience"/>
                        <button type="submit">Salvar</button>
                        <Crud>
                            <ul>
                                <li>Habilidade</li>
                                <li>Experiência</li>
                                <li>Ação</li>
                            </ul>
                            <CrudInformation>
                                <Habilidades>
                                    <button>PHP</button>
                                </Habilidades>
                                <Separador id="habilidades"/>
                                <Habilidades>
                                    <p>1 Ano</p>
                                </Habilidades>
                                <Separador id="habilidades"/>
                                <ContainerAction/>
                            </CrudInformation>
                        </Crud>
                    </div>
                </ContainerHabilidades>            
                <Footer/>
            </ArticleCadastro>
        </>
    );
}

export default CadastroTrabalhador;