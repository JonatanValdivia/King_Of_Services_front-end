import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from './style';
function CardSolicitacao(props){
  return(
    <ContentCard>
            <CardProgressStyle>
                <img src={`http://kingofservices.com.br/${props.props.foto}`} alt=""/>
                <p>{props.props.nome}, {props.props.idade}</p>
                <p>{props.props.profissao}</p>
                <ButtonProgress>
                    A {props.props.statusServico}
                </ButtonProgress>
                <p id="description">{props.props.descricao}</p>
            </CardProgressStyle>
        </ContentCard>
  );
}

export default CardSolicitacao;