import Estrela from "../../assets/estrela.png"
import { CardList, EstrelaStyle, Profile } from "./style";

function CardWorker() {
    return(
        <CardList>
            <Profile/>
            <p>Fulano de tal, 35</p>
            <EstrelaStyle>
                <img src={Estrela}/>
                <img src={Estrela}/>
                <img src={Estrela}/>
                <img src={Estrela}/>
                <img src={Estrela}/>
            </EstrelaStyle>
            <button>Ver Perfil</button>
            <p id="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                ea commodo consequat. 
            </p>
        </CardList>
    );
}

export default CardWorker;