import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from './style';
function CardSolicitacao(props){
  console.log(props)
  return(
    <ContentCard>
      <CardProgressStyle>
        <img src={`http://kingofservices.com.br/${props.props.foto}`} alt=""/>
        <p>{props.props.nome}, {props.props.idade}</p>
        <p>{props.props.nomeProfissao}</p>
        <span>Solicitado em {props.props.criado} às {props.props.criadoHora}</span>
        <br/>
        <ButtonProgress>
          A {props.props.statusServico}
        </ButtonProgress>
        <p id="description">{props.props.descricao}</p>
      </CardProgressStyle>
    </ContentCard>
  );
}

export default CardSolicitacao;