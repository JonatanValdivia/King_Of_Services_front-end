import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from './style';
function CardAndamento(props){
  return(
    <ContentCard>
      <CardProgressStyle>
          <img src={`http://kingofservices.com.br/${props.props.foto}`} alt=""/>
          <p>{props.props.nome}, {props.props.idade}</p>
          <p>{props.props.profissao}</p>
          <ButtonProgress>
            Pendente
          </ButtonProgress>
          <p id="description">{props.props.descricao}</p>
      </CardProgressStyle>
    </ContentCard>
  );
}

export default CardAndamento;