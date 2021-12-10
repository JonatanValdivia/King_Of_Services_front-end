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
            <h1>Efetuar pagamento</h1>
            <span id="close" onClick={closeModal}>&#10006;</span>
          </header>
          <div class="modal__main">
            <form class="form">
              <label>Cartões salvos</label>
              <p>Selecione um cartão já cadastrado ou cadastre um novo abaixo</p>
              <input type="text" placeholder="Selecionar cartão cadastrado"/>
              <div>Imagens das marcas dos cartões</div>
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
                <input type="text" placeholder="Selecione o número de parcelas"/>
                <input id="lastChild" type="text" placeholder="R$100,00
                "/>
              </div>
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