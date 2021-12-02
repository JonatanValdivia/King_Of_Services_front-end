import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from "./style";
import api from "../../../services/api";

function CardPedidos(datas){
    
    const update = (event) =>{
        const id = event.target.value
        api.put(`http://kingofservices.com.br/SolicitacoesPrestadoresAceitar/${id}`, {}).then(()=>{
            window.location.reload(0);
        }).catch((data) =>{
            console.log(data);
        })
    }
    return(
        <ContentCard>
            <CardProgressStyle>
                <Profile src={`http://kingofservices.com.br/${datas.props.foto}`} alt={datas.props.foto}/>
                <p>{datas.props.nome}, {datas.props.idade}</p>
                <ButtonProgress>
                    <button value={datas.props.idServicoPrestador} onClick={(e) => update(e)}>{datas.props.statusServico}</button>
                </ButtonProgress>
                <p id="description">{datas.props.descricao}</p>
            </CardProgressStyle>
        </ContentCard>
    );
}

export default CardPedidos;