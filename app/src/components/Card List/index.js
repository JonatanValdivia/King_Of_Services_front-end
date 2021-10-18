import Estrela from "../../assets/estrela.png"
import { CardList, EstrelaStyle, Profile } from "./style";

function CardWorker(props) {
    return(
        <CardList>
            <Profile/>
            <p>{props.nome}</p>
            <EstrelaStyle>
                <img src={Estrela}/>
                <img src={Estrela}/>
                <img src={Estrela}/>
                <img src={Estrela}/>
                <img src={Estrela}/>
            </EstrelaStyle>
            <button>Ver Perfil</button>
            <p id="description">
                {props.descricao}
            </p>
        </CardList>
    );
}

export default CardWorker;