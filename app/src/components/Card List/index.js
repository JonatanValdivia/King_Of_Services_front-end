import Estrela from "../../assets/estrela.png"
import { CardList, EstrelaStyle, Profile } from "./style";

function CardWorker(props) {
    return(
        <CardList>
            <Profile/>
            <p>
                {/* {props.nome} */}
                Fulano de tal, 35
            </p>
            <EstrelaStyle>
                <img src={Estrela}/>
                <img src={Estrela}/>
                <img src={Estrela}/>
                <img src={Estrela}/>
                <img src={Estrela}/>
            </EstrelaStyle>
            <button>Ver Perfil</button>
            <p id="description">
                {/* {props.descricao} */}
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
            </p>
        </CardList>
    );
}

export default CardWorker;