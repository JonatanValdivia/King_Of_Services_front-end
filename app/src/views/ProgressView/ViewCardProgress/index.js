import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from "./style";

function CardProgress(props){
    return(
        <ContentCard>
            <CardProgressStyle>
                <img src={`http://kingofservices.com.br/SolicitacoesPrestadoresAndamento/${props.props.foto}`} alt={props.props.foto}/>
                <p>{props.props.nome}, {props.props.idade}</p>
                <ButtonProgress>
                    <p>Em andamento</p>
                </ButtonProgress>
                <p id="description">{props.props.descricao}</p>
            </CardProgressStyle>
        </ContentCard>
    );
}

export default CardProgress;