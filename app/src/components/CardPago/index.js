import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from './style';
import { AiFillCheckCircle } from "react-icons/ai";

function CardSolicitacao(props){
  
  return(
    <ContentCard>
      <CardProgressStyle>
        <img src={`http://kingofservices.com.br/${props.props.foto}`} alt=""/>
        <p>{props.props.nome}, {props.props.idade}</p>
        <p>{props.props.nomeProfissao}</p>
        <span>Pago em {props.props.atualizado} às {props.props.atualizadoHora}</span>
        <br/>
        <br/>
        <ButtonProgress>
          <h1>Pago</h1>
          <br/>
        </ButtonProgress>
        <p id="description">{props.props.descricao}</p>
        <div>
          
        </div>
      </CardProgressStyle>
    </ContentCard>
  );
}

export default CardSolicitacao;