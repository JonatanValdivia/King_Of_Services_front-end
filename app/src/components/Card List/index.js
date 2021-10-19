import Estrela from "../../assets/estrela.png"
import { CardList, EstrelaStyle, Profile } from "./style";

function CardWorker(props) {

    const verPerfil = () =>{
        console.log(props.props.idPrestador);
    }
    
    return(
        <CardList>
            <Profile/>
            <p>
                {props.props.nome}, {props.props.idade}
            </p>
            <EstrelaStyle>
                <img src={Estrela}/>
                <img src={Estrela}/>
                <img src={Estrela}/>
                <img src={Estrela}/>
                <img src={Estrela}/>
            </EstrelaStyle>
            <button onClick={verPerfil}>Ver Perfil</button>
            <p id="description">
                {props.props.descricao}
            </p>
        </CardList>
    );
}

export default CardWorker;