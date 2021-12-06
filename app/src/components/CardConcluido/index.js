import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from './style';
import { AiFillCheckCircle } from "react-icons/ai";
function CardSolicitacao(props){
  return(
    <ContentCard>
            <CardProgressStyle>
                <img src={`http://kingofservices.com.br/${props.props.foto}`} alt=""/>
                <p>{props.props.nome}, {props.props.idade}</p>
                <p>{props.props.profissao}</p>
                <ButtonProgress>
                    <AiFillCheckCircle size="40px" color="green"/>
                    {/* <div id="pagar">Pagar</div> */}
                    <button>Pagar</button>
                </ButtonProgress>
                <p id="description">{props.props.descricao}</p>
            </CardProgressStyle>
        </ContentCard>
  );
}

export default CardSolicitacao;