import Estrela from "../../assets/estrela.png"
import { CardList, EstrelaStyle, Profile } from "./style";
import api from "../../services/api";
import { Link, useHistory } from 'react-router-dom';

function CardWorker(props) {
    let history = useHistory();

    const verPerfil = () =>{
        const id = props.props.idPrestador
        console.log(id);
        // api.get(`http://kingofservices.com.br/Prestadores/${id}`);
        history.push(`/PerfilPrestador/:${id}`);
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