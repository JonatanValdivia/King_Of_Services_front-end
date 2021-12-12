import { Overlay, Estrelas, Dados } from './style';
import Estrela from "../../assets/estrela.png";
function Portifolio(props){
  let estrela = [];
  for (let i = 0; i < props.props.estrelas; i++){
    estrela.push(props.props.estrelas)
  }

  return(
    <Overlay>
      <div id="foto_nome">
        <img src={`http://kingofservices.com.br/${props.props.foto}`} alt=""/>
        <h2>{props.props.nome}</h2>
      </div>
      <br/>
      <p>{props.props.comentario}</p>
      <Dados>        
        <div>
          <img src={`http://kingofservices.com.br/fotos_avaliacoes/${props.props.imagemServico}`} alt=""/>
        </div>
        <Estrelas>
          {estrela.map(element => {
            return (
              <img src={Estrela}/>
            );
          })}
          <p>{props.props.estrelas}/5</p>
        </Estrelas>
      </Dados>
    </Overlay>
  );
}

export default Portifolio; 