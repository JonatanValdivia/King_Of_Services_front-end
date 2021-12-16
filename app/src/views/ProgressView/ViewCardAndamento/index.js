import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from "./style";
import api from "../../../services/api";
import { useHistory } from 'react-router-dom';

function CardPedidos(datas){
    let history = useHistory();
    
    const update = (event) =>{
        const id = event.target.value
        api.put(`http://kingofservices.com.br/SolicitacoesPrestadoresAceitar/${id}`, {}).then(()=>{
            window.location.reload(0);
        }).catch((data) =>{
            console.log(data);
        })
    }

    const verOPerfil = () =>{
        history.push(`/VerperfilCliente/:${datas.props.idCliente}`);
    }

    return(
        <ContentCard>
            <CardProgressStyle>
                <Profile src={`http://kingofservices.com.br/${datas.props.foto}`} alt={datas.props.foto}/>
                <p><a onClick={verOPerfil}>{datas.props.nome}</a>, {datas.props.idade}</p>
                <br/>
                <span>Solicitado em {datas.props.criado} às {datas.props.criadoHora}</span>
                <p id="description">{datas.props.descricao}</p>
                <ButtonProgress>
                    <button value={datas.props.idServicoPrestador} onClick={(e) => update(e)}>Aceitar serviço</button>
                </ButtonProgress>
            </CardProgressStyle>
        </ContentCard>
    );
}

export default CardPedidos;