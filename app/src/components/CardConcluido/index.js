import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from './style';
import { AiFillCheckCircle } from "react-icons/ai";
import Cartoes from '../../assets/cartoes.png';
import { useState } from 'react';
import api from '../../services/api';

function CardSolicitacao(props){
  const idPrestador = props.props.idPrestador;
  const idCliente = props.props.idCliente;
  const [estrelas, setEstrelas] = useState('');
  const [comentario, setComentario] = useState('');
  const [foto, setFoto] = useState('');
  const idServicoPrestador = props.props.idServicoPrestador;

  const openModal = () => document.querySelector('#modal').classList.add('active');

  const closeModal = () => document.querySelector('#modal').classList.remove('active');

  const fotoHandler = (e) =>{
    let fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (event) => {
        setFoto(event.target.result);   
    }
  }
  
  const handleDropDown = event =>{
    setEstrelas(event);
  }
  
  const handleComentario = event =>{
    setComentario(event);
  }

  const handleSubmit = () => {
    api.post("http://kingofservices.com.br/Avaliacoes", {idPrestador, idCliente, estrelas, comentario, foto}).then(() =>{
      console.log({idPrestador, idCliente, estrelas, comentario, foto});
    });
    
    api.put(`http://kingofservices.com.br/SolicitacoesClientesPago/${idServicoPrestador}`, {}).then(()=>{
      closeModal();
      window.location.reload(0);
    })
  }
  
  return(
    <ContentCard>
      <CardProgressStyle>
        <img src={`http://kingofservices.com.br/${props.props.foto}`} alt=""/>
        <p>{props.props.nome}, {props.props.idade}</p>
        <p>{props.props.nomeProfissao}</p>
        <span>Concluído em {props.props.atualizado} às {props.props.atualizadoHora}</span>
        <br/>
        <br/>
        <ButtonProgress>
          <AiFillCheckCircle size="40px" color="green"/>
        </ButtonProgress>
        <p id="description">{props.props.descricao}</p>
        <div>
          <button onClick={openModal}>Pagar</button>
        </div>
      </CardProgressStyle>
      <div class="modal" id="modal">
        <div class="modal__content">
          <header class="modal__header">
            <h1>Efetuar pagamento e avaliação</h1>
            <span id="close" onClick={closeModal}>&#10006;</span>
          </header>
          <div class="modal__main">
            <form class="form">
              <label>Cartões salvos</label>
              <p>Selecione um cartão já cadastrado ou cadastre um novo abaixo</p>
              <input type="text" placeholder="Selecionar cartão cadastrado"/>
              <div>
                <img src={Cartoes} alt="Cartoes"/>
              </div>
              <label>Titular</label>
              <p>Informar o mesmo nome que está impresso no cartão</p>
              <input type="text" placeholder="Nome do titular"/>
              <p>CPF ou CNPJ do cartão</p>
              <input type="text" placeholder="CPF ou CNPJ"/>
              <br/>
              <label>Número</label>
              <p>De qualquer bandeira dentre as exibidas acima</p>
              <div id="grid1">
                <label>Validade</label>
                <label>Cod. CVV</label>
              </div>
              <div id="grid2">
                <input id="input1" type="text" placeholder="Ano"/>
                <input id="input2" type="text" placeholder="Mês"/>
                <input id="input3" type="text" placeholder="CVV"/>
              </div>
              <br/>
              <label>Número</label>
              <input type="text" placeholder="N° do cartão"/>
              <div id="grid3">
                <label>Parcelas</label>
                <label>Total</label>
              </div>
              <div id="grid4">
                <input id="firstChild" type="text" placeholder="Selecione o número de parcelas"/>
                <input id="lastChild" type="text" placeholder="R$100,00
                "/>
              </div>
              <hr/>
              <label>Avaliação</label>
              <p>Envie uma foto do serviço realizado e selecione uma quantidade de estrelas.</p>
              <div id="avaliacao">
                <div>
                  <label for="foto">Selecione uma foto</label>
                  <input type="file" id="foto" accept="image/*" onChange={e => fotoHandler(e)}/>
                  <select onChange={e => handleDropDown(e.target.value)}>
                    <option>Selecione uma quantidade de estrelas</option>
                    <option value="1">Uma estela</option>
                    <option value="2">Duas estrelas</option>
                    <option value="3">Três estrelas</option>
                    <option value="4">Quatro estrelas</option>
                    <option value="5">Cinco estrelas</option>
                  </select>
                </div>
                <textarea placeholder="Comentário sobre o serviço" maxLength="255" value={comentario} onChange={(e)=>handleComentario(e.target.value)}>

                </textarea>
              </div>
            </form>
          </div>
          <footer class="modal__footer">
            <button onClick={handleSubmit} class="btn green" id="salvar">
              Pagar e avaliar
            </button>
            <button class="btn blue" id="cancelar" onClick={closeModal}>
              Cancelar
            </button>
          </footer>
        </div>
      </div>
    </ContentCard>
  );
}

export default CardSolicitacao;