import Header from "../../../components/Header-Logout";
import { Button } from "./style";
import { Container, Content, Foto, Inputs, StyleComponent } from "./style";
import { useState, useEffect } from "react";
import jwtDecode from 'jwt-decode';
import apiCep from "../../../services/apiCep";
import api from "../../../services/api";
import InputMask from "react-input-mask";
import { Helmet } from 'react-helmet';

function EditarPerfilCliente() {
  const [cliente, setCliente] = useState([]);
  const token = jwtDecode(localStorage.getItem("token")) ?? [];
  const [foto, setFoto] = useState("");
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
  const [descricao, setDescricao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setdataNascimento] = useState("");

  useEffect(() => {
    api
      .get(`Clientes/${token.data.id}`)
      .then((data) => {
        setCliente(data.data);
        setNome(data.data.nome);
        setCep(data.data.CEP);
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
        setdataNascimento(data.data.dataNascimento)
      }).catch(() =>{

      })
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
    api.put(`AtualizarFotoCliente/${cliente.idCliente}`, {foto}).then((data) => {
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

  const buscarCep = (cep) => {
    apiCep.get(`${cep}/json/`).then(({ data }) => {
      setUf(data.uf);
      setCidade(data.localidade);
      setBairro(data.bairro);
      setRua(data.logradouro);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((nome || email ||descricao || telefone || dataNascimento || cep || uf || cidade || bairro || rua || numero != "")) {

      api.put(`http://kingofservices.com.br/Clientes/${cliente.idCliente}`, {idSexo, nome, email, descricao, telefone, dataNascimento, foto, uf, cidade, bairro, rua, numero, complemento, cep})
      .then((data) => {
        resultadoPositivo();
      }).catch(() => resultadoNegativo());
    } else {
      resultadoNegativo();
    }
  }
  
  return (
    <>
      <Helmet>
        <title>King of Services</title>
      </Helmet>
      <Header />
      <Content>
        <Container>
          <StyleComponent>
            <Foto>
              <img src={`http://kingofservices.com.br/${cliente.foto}`} alt="" />
            </Foto>

            <label for='foto'>Editar foto &#187;</label>
            <input type="file" id="foto" accept="image/*" onChange={e => fotoHandler(e)}/>
             <Inputs>
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Nome completo"
                  value={nome}
                  onChange={nomeHandler}
                />
                <label>Selecione o seu g??nero:</label>
                <div onChange={valorGenero}>
                  <input type="radio" value="1" name="gender" /> Masculino
                  <input type="radio" value="2" name="gender" /> Feminino
                  <input type="radio" value="3" name="gender" /> Outro
                </div>

                <p>Endere??o</p>
                <input
                  placeholder="cep"
                  value={cep}
                  onChange={cepHandler}
                  onBlur={() => {
                    buscarCep(cep);
                  }}
                />
                <input placeholder="Uf" value={uf} onChange={ufHandler} />
                <input
                  placeholder="Cidade"
                  value={cidade}
                  onChange={cidadeHandler}
                />
                <input
                  placeholder="Bairro"
                  value={bairro}
                  onChange={bairroHandler}
                />
                <input placeholder="Rua" value={rua} onChange={ruaHandler} />
                <input
                  placeholder="N??mero"
                  value={numero}
                  onChange={numeroHandler}
                />
                <input
                  placeholder="Complemento (opcional)"
                  value={complemento}
                  onChange={complementoHandler}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={emailHandler}
                />
                <p>Descri????o</p>
                <textarea
                  placeholder="Escreva um pouco sobre voc?? e com o que voc?? trabalha... (descri????o)"
                  value={descricao}
                  onChange={descricaoHandler}
                ></textarea>
                <InputMask
                  mask="(99) 99999-9999"
                  placeholder="N??mero de telefone"
                  value={telefone}
                  onChange={telefoneHandler}
                />
                <InputMask
                  mask="99/99/9999"
                  placeholder="Data de nascimento"
                  value={dataNascimento}
                  onChange={dataNascimentoHandler}
                />
                <Button>
                  <button
                    type="submit"
                    onClick={(event) => handleSubmit(event)}
                  >
                    Editar
                  </button>
                </Button>
                <div id="resultadoPositivo">
                  <p>Edi????o executada com sucesso!</p>
                </div>
                <div id="resultadoNegativo">
                  <p>
                    N??o foi poss??vel realizar a edi????o. Verifique se todos os
                    dados est??o corretos!
                  </p>
                </div>
              </form>
            </Inputs>
          </StyleComponent>
        </Container>
      </Content>
    </>
  );
}

export default EditarPerfilCliente;