import { ButtonProgress, CardProgressStyle, ContentCard } from "./style";
import { AiFillCheckCircle } from "react-icons/ai";
import { Profile } from "./style";

function CardConcluido(props){
    return(
        <ContentCard>
            <CardProgressStyle>
                <img src={`http://kingofservices.com.br/${props.props.foto}`} alt={props.props.foto}/>
                <p>{props.props.nome}, {props.props.idade}</p>
                <ButtonProgress>
                    <AiFillCheckCircle size="40px" color="green"/>
                </ButtonProgress>
                <p id="description">{props.props.descricao}</p>
            </CardProgressStyle>
        </ContentCard>
    );
}

export default CardConcluido;