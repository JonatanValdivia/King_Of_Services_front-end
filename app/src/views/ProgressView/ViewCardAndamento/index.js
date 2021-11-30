import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from "./style";

function CardPedidos(datas){
    return(
        <ContentCard>
            <CardProgressStyle>
                {console.log(datas.props.foto)}
                <Profile src={`http://kingofservices.com.br/${datas.props.foto}`} alt={datas.props.foto}/>
                <p>{datas.props.nome}, {datas.props.idade}</p>
                <ButtonProgress>
                    <button>{datas.props.statusServico}</button>
                </ButtonProgress>
                <p id="description">{datas.props.descricao}</p>
            </CardProgressStyle>
        </ContentCard>
    );
}

export default CardPedidos;