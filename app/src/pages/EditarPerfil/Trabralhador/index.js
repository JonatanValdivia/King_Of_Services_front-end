import Header from "../../../components/Header-Logout";
import { Button } from "../../CadastroTrabalhador/style";
import { Container, ContainerAction, ContainerHabilidades, Content, Crud, CrudInformation, Foto, Habilidades, Inputs, Separador, StyleComponent } from "./style";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import api from "../../../services/api";
import apiCep from "../../../services/apiCep";
import InputMask from "react-input-mask";
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function EditarPerfilTrabalhador() {
  let history = useHistory();
  const [profissao, setProfissao] = useState([]);
  const [prestador, setPrestador] = useState([]);
  const token = jwtDecode(localStorage.getItem("token")) ?? [];
  const [foto, setFoto] = useState("");
  const [idProfissao, setIdProfissao] = useState("");
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
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const [descricao, setDescricao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setdataNascimento] = useState("");

  useEffect(() => {
    api.get(`Prestadores/${token.data.id}`).then(data => {
        setPrestador(data.data);
        setNome(data.data.nome);
        setCep(data.data.cep);
        setUf(data.data.uf);
        setCidade(data.data.cidade);
        setBairro(data.data.bairro);
        setRua(data.data.rua);
        setNumero(data.data.numero);
        setComplemento(data.data.complemento);
        setEmail(data.data.email);
        setDescricao(data.data.descricao);
        setTelefone(data.data.telefone);
        setIdSexo(data.data.idSexo); 
        setIdProfissao(data.data.idPrestador);
        setdataNascimento(data.data.dataNascimento);
      }).catch(() => {});

    api.get("Profissoes").then(({ data }) => {
      setProfissao(data);
    }).catch(() => {
      setProfissao([]);
    });
  }, []);

  const dataNascimentoHandler = (event) => {
    setdataNascimento(event.target.value);
  };

  const telefoneHandler = (event) => {
    setTelefone(event.target.value);
  };

  const descricaoHandler = (event) => {
    setDescricao(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const nomeHandler = (event) => {
    setNome(event.target.value);
  };

  const cepHandler = (event) => {
    setCep(event.target.value);
  };

  const complementoHandler = (event) => {
    setComplemento(event.target.value);
  };

  const numeroHandler = (event) => {
    setNumero(event.target.value);
  };

  const ruaHandler = (event) => {
    setRua(event.target.value);
  };

  const bairroHandler = (event) => {
    setBairro(event.target.value);
  };

  const cidadeHandler = (event) => {
    setCidade(event.target.value);
  };

  const ufHandler = (event) => {
    setUf(event.target.value);
  };

  const alterarFoto = (foto) =>{
    api.put(`AtualizarFotoPrestador/${prestador.idPrestador}`, {foto}).then(() => {
      window.location.reload(0);
    }).catch(() =>{

    });
  }

  const fotoHandler = (e) => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (event) => {
      alterarFoto(event.target.result); 
    }; 
  };

  const valorGenero = (event) => {
    setIdSexo(event.target.value);
  };

  const resultadoPositivo = () => {
    const resultadoPositivo = document.getElementById("resultadoPositivo");
    resultadoPositivo.style.display = "flex";
    setTimeout(() => {
      resultadoPositivo.style.display = "none";
    }, 5000);
  };

  const resultadoNegativo = () => {
    const resultadoNegativo = document.getElementById("resultadoNegativo");
    resultadoNegativo.style.display = "flex";
    setTimeout(() => {
      resultadoNegativo.style.display = "none";
    }, 5000);
  };

  const handleDropDown = (event) => {
    setIdProfissao(event);
  };

    const handleSubmit = (event) => {
    
    // event.preventDefault();
    if  ( nome || email || descricao || senhaConfirm || telefone || dataNascimento || cep || uf || cidade || bairro || rua ||  numero != "") {
      api.put(  `http://kingofservices.com.br/Prestadores/${prestador.idPrestador}`,  { idProfissao, idSexo, nome, email, descricao, telefone, dataNascimento, uf, cidade, bairro, rua, numero, complemento, cep }
        ).then(data => {
          resultadoPositivo();
        }).catch(() => resultadoNegativo());
    }else {
      resultadoNegativo();
    }
  };

  const buscarCep = (cep) => {
    apiCep.get(`${cep}/json/`).then(({ data }) => {
      setUf(data.uf);
      setCidade(data.localidade);
      setBairro(data.bairro);
      setRua(data.logradouro);
    });
  };

  return (
    <>
      <Helmet>
        <title>King of Services</title>
      </Helmet>
      <Header />
      <Content>
        <Container>
          <StyleComponent>
            <Foto src={`http://kingofservices.com.br/${prestador.foto}`} id="fotoPrestador" alt={'alt'}
            ></Foto>
            <label for="foto">Selecione uma foto &#187;</label>
            <input type="file" id="foto" accept="image/*" onChange={(e) => fotoHandler(e)}/>
            <Inputs>
              <form onSubmit={handleSubmit}>
                <input placeholder="Nome completo" value={nome} onChange={nomeHandler}/>
                <label>Selecione o seu gênero:</label>
                <div onChange={valorGenero}>
                  <input type="radio" value="1" name="gender" /> Masculino
                  <input type="radio" value="2" name="gender" /> Feminino
                  <input type="radio" value="3" name="gender" /> Outro
                </div>
                <select placeholder="Selecione sua profissao" onChange={(e) => handleDropDown(e.target.value)}>
                  <option key="0" value="0">
                    Selecione sua profissão
                  </option>
                  {profissao.map((element) => {
                    return (
                      <option key={element.idProfissao} value={element.idProfissao}>
                        {element.nomeProfissao}
                      </option>
                    );
                  })}
                </select>

                <p>Endereço</p>
                <input placeholder="cep" value={cep} onChange={cepHandler} onBlur={() => {buscarCep(cep);}}/>
                <input placeholder="Uf" value={uf} onChange={ufHandler} />
                <input placeholder="Cidade" value={cidade} onChange={cidadeHandler}/>
                <input placeholder="Bairro" value={bairro} onChange={bairroHandler}/>
                <input placeholder="Rua" value={rua} onChange={ruaHandler} />
                <input placeholder="Número" value={numero} onChange={numeroHandler}/>
                <input placeholder="Complemento (opcional)" value={complemento} onChange={complementoHandler}/>
                <input type="email" placeholder="E-mail" value={email} onChange={emailHandler}/>
                <p>Descrição</p>
                <textarea placeholder="Escreva um pouco sobre você e com o que você trabalha... (descrição)" value={descricao} onChange={descricaoHandler}></textarea>
                <InputMask mask="(99) 99999-9999" placeholder="Número de telefone" value={telefone} onChange={telefoneHandler}/>
                <InputMask mask="99/99/9999" placeholder="Data de nascimento" value={dataNascimento} onChange={dataNascimentoHandler}/>
                <Button>
                  <button
                    type="submit" onClick={(event) => handleSubmit(event)}>
                    Editar
                  </button>
                </Button>
                <div id="resultadoPositivo">
                  <p>Edição executada com sucesso!</p>
                </div>
                <div id="resultadoNegativo">
                  <p>
                    Não foi possível realizar o a edição. Verifique se todos os dados estão corretos!
                  </p>
                </div>
              </form>
            </Inputs>

            <ContainerHabilidades>
              <div>
                <p>Habilidades</p>
                <input placeholder="Habilidade" />
                <input placeholder="Experiência" id="experience" />
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
                    <Separador id="habilidades" />
                    <Habilidades>
                      <p>1 Ano</p>
                    </Habilidades>
                    <Separador id="habilidades" />
                    <ContainerAction />
                  </CrudInformation>
                </Crud>
              </div>
            </ContainerHabilidades>

            <Button>
              <button>Salvar</button>
            </Button>
          </StyleComponent>
        </Container>
      </Content>
    </>
  );
}

export default EditarPerfilTrabalhador;
