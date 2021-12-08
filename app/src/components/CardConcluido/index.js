import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from './style';
import { AiFillCheckCircle } from "react-icons/ai";
function CardSolicitacao(props){
  
  const openModal = () => document.querySelector('#modal').classList.add('active');

  const closeModal = () => document.querySelector('#modal').classList.remove('active');
  
  return(
    <ContentCard>
      <CardProgressStyle>
        <img src={`http://kingofservices.com.br/${props.props.foto}`} alt=""/>
        <p>{props.props.nome}, {props.props.idade}</p>
        <p>{props.props.profissao}</p>
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
              <h1>Efetuar pagamento</h1>
              <span id="close" onClick={closeModal}>&#10006;</span>
            </header>
            <div class="modal__main">
              <form class="form">
                <p>
                  Envie uma foto do serviço realizado! (opcional)
                  <input type="file"/>
                </p>
              </form>
            </div>
            <footer class="modal__footer">
              <button class="btn green" id="salvar">
                Pagar
              </button>
              <button class="btn blue" id="cancelar" onClick={closeModal}>
                Cancelar pagamento
              </button>
            </footer>
          </div>
        </div>
      </ContentCard>
  );
}

export default CardSolicitacao;