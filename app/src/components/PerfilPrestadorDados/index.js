import { StyleComponent1, Foto, StyleComponent2, Dados, Estrelas, Habilidades, Album } from "./style";
import Estrela from "../../assets/estrela.png";
import Imagem from "../../assets/image.jpg";
import Profile from "../../assets/Diarista.png";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import api from '../../services/api';

function PerfilPrestadorDados(props) {
  let { idPrestador } = useParams();
  const [prestador, setPrestador] = useState([]);
  const login = localStorage.getItem('login') ?? false;

  useEffect(() => {

    const formatacao = idPrestador.replace(':', '');
    api.get(`http://kingofservices.com.br/Prestadores/${formatacao}`).
      then(({ data }) => {
        setPrestador(data)
        console.log(data);
      });
  }, [idPrestador])
  return (
    <>
      <StyleComponent1>
        <Foto>
          <img src={`http://kingofservices.com.br/${prestador.foto}`} alt="" />
        </Foto>
        <div>
          <p>{prestador.telefone}</p>
          <p>{prestador.rua}, {prestador.numero} - {prestador.cidade}, {prestador.uf}</p>
          { login == '"cliente"' ? <button>Solicitar serviço</button> : <div></div> }
          <p>{prestador.nome}</p>
        </div>
      </StyleComponent1>
      <StyleComponent2>
        <Dados>
          <h1>{prestador.nome}</h1>
          <h2>{prestador.idProfissao}</h2>
          <p>{prestador.descricao}</p>
          <Estrelas>
            <img src={Estrela} />
            <img src={Estrela} />
            <img src={Estrela} />
            <img src={Estrela} />
            <img src={Estrela} />
            <p>5/5</p>
          </Estrelas>
        </Dados>
        <Habilidades>
          <h3>Habilidades</h3>
          <div>
            <p>PHP</p>
            <p>Node</p>
            <p>MySQL</p>
            <p>React</p>
          </div>
        </Habilidades>
        <Album>
          <h1>Titulo</h1>
          <div>
            <img src={Imagem} />
            <img src={Imagem} />
            <img src={Imagem} />
            <img src={Imagem} />
            <img src={Imagem} />
            <img src={Imagem} />
          </div>
        </Album>
      </StyleComponent2>
    </>
  );
}

export default PerfilPrestadorDados;