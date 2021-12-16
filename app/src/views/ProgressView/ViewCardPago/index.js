import { ButtonProgress, CardProgressStyle, ContentCard } from "./style";
import { AiFillCheckCircle } from "react-icons/ai";
import { Profile } from "./style";
import { useHistory } from 'react-router-dom';

function CardConcluido(props){
    let history = useHistory();

    const verOPerfil = () =>{
        history.push(`/VerperfilCliente/:${props.props.idCliente}`);
    }
    return(
        <ContentCard>
            <CardProgressStyle>
                <img src={`http://kingofservices.com.br/${props.props.foto}`} alt={props.props.foto}/>
                <p><a onClick={verOPerfil}>{props.props.nome}</a>, {props.props.idade}</p>
                <br/>
                <span>Pago em {props.props.atualizado} às {props.props.atualizadoHora}</span>
                <ButtonProgress>
                    <h1>Pago</h1>
                </ButtonProgress>
                <p id="description">{props.props.descricao}</p>
            </CardProgressStyle>
        </ContentCard>
    );
}

export default CardConcluido;