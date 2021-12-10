import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from './style';
function CardAndamento(props){
  return(
    <ContentCard>
      <CardProgressStyle>
          <img src={`http://kingofservices.com.br/${props.props.foto}`} alt=""/>
          <p>{props.props.nome}, {props.props.idade}</p>
          <p>{props.props.nomeProfissao}</p>
          <span>Iniciado em {props.props.atualizado} às {props.props.atualizadoHora}</span>
          <br/>
          <ButtonProgress>
            Pendente
          </ButtonProgress>
          <p id="description">{props.props.descricao}</p>
      </CardProgressStyle>
    </ContentCard>
  );
}

export default CardAndamento;