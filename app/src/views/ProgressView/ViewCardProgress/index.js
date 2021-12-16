import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from "./style";
import api from "../../../services/api";
import { useHistory } from 'react-router-dom';

function CardProgress(props){
    let history = useHistory();

    const update = (event) =>{
        const id = event.target.value;
        api.put(`http://kingofservices.com.br/SolicitacoesPrestadoresAndamento/${id}`).then(() =>{
            window.location.reload(0);
        }).catch(() =>{

        })
    }

    const verOPerfil = () =>{
        history.push(`/VerperfilCliente/:${props.props.idCliente}`);
    }
    return(
        <ContentCard>
            <CardProgressStyle>
                <img src={`http://kingofservices.com.br/${props.props.foto}`} alt={props.props.foto}/>
                <p>
                    <a onClick={verOPerfil}>
                        {props.props.nome}
                    </a>, {props.props.idade}</p>
                <br/>
                <span>Iniciado em {props.props.atualizado} às {props.props.atualizadoHora}</span>
                <p id="description">{props.props.descricao}</p>
                <ButtonProgress>
                    <p>Em andamento</p>
                    <button value={props.props.idServicoPrestador} onClick={(e) => update(e)}>Concluir serviço</button>
                </ButtonProgress>
            </CardProgressStyle>
        </ContentCard>
    );
}

export default CardProgress;