import { StyleComponent1, Foto, StyleComponent2, Dados, Estrelas, Habilidades, Album } from "./style";
import Imagem from "../../assets/image.jpg";
import Profile from "../../assets/Diarista.png";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import api from '../../services/api';
import jwtDecode from "jwt-decode";
import Avaliacoes from "../../components/Avaliacoes"

function PerfilPrestadorDados(props) {
  let { idPrestador } = useParams();
  const [prestador, setPrestador] = useState([]);
  const [avaliacao, setAvaliacao] = useState([]);
  const login = localStorage.getItem('login') ?? false;
  const token = jwtDecode(localStorage.getItem('token') ?? false);
  const [descricao, setDescricao] = useState();

  const handlerDescricao = (event) =>{
    setDescricao(event.target.value);
  }

  useEffect(() => {
    const formatacao = idPrestador.replace(':', '');
    api.get(`Prestadores/${formatacao}`).
      then(({ data }) => {
        setPrestador(data);
      });
    
    api.get(`AvaliacoesPrestador/${formatacao}`).then(data =>{
      setAvaliacao(data.data);
      console.log(data.data)
    });
    
  }, [idPrestador]);

  const openModal = () => document.querySelector('#modal').classList.add('active');

  const closeModal = () => document.querySelector('#modal').classList.remove('active');

  const salvarSolicitacao = () =>{
    const idPrestador = document.querySelector('#salvar').value;
    const idCliente = token.data.id;
    const statusServico = 'aceitar';
    api.post('http://kingofservices.com.br/SolicitacoesPrestadoresAceitar', {idPrestador, idCliente, descricao, statusServico}).then(() =>{
      closeModal();
      setDescricao('');
    }).catch(() => {
    
    })
  }
  

  return (
    <>
      <StyleComponent1>
        <Foto>
          <img src={`http://kingofservices.com.br/${prestador.foto}`} alt="" />
        </Foto>
        <div>
          <p>{prestador.telefone}</p>
          <p>{prestador.rua}, {prestador.numero} - {prestador.cidade}, {prestador.uf}</p>
          { login == '"cliente"' ? <button id="buttonSolicitar" onClick={openModal}>Solicitar servi??o</button> : <div></div> }
          <div class="modal" id="modal">
            <div class="modal__content">
                <header class="modal__header">
                    <h1>Que tipo de servi??o voc?? precisa?</h1>
                    <span id="close" onClick={closeModal}>&#10006;</span>
                </header>
                <div class="modal__main">
                    <form class="form">
                        <textarea placeholder="Descreva o que voc?? precisa (breve descri????o)..." value={descricao} onChange={(e) => handlerDescricao(e)}></textarea>
                    </form>
                </div>
                <footer class="modal__footer">
                    <button class="btn green" id="salvar" value={prestador.idPrestador} onClick={salvarSolicitacao}>
                      Enviar solicita????o
                    </button>
                    <button class="btn blue" id="cancelar" onClick={closeModal}>
                      Cancelar
                    </button>
                </footer>
            </div>
        </div>
          <p>{prestador.nome}</p>
        </div>
      </StyleComponent1>
      <StyleComponent2>
        <Dados>
          <h1>{prestador.nome}</h1>
          <h2>{prestador.profissao}</h2>
          <p>{prestador.descricao}</p>
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
        <h1>Avalia????es</h1>
        <Album>
          {avaliacao.map(element =>{
            return(
              <Avaliacoes props={element}/>
            );
          })}
        </Album>
      </StyleComponent2>
    </>
  );
}

export default PerfilPrestadorDados;