import { ButtonProgress, CardProgressStyle, ContentCard } from "./style";
import { AiFillCheckCircle } from "react-icons/ai"

function CardConcluido(){
    return(
        <ContentCard>
            <CardProgressStyle>
                {/* <Profile/> */}
                <p>Fulano de Tal, 35</p>
                <ButtonProgress>
                    <AiFillCheckCircle size="40px" color="green"/>
                </ButtonProgress>
                <p id="description">Uma breve descrição sobre o serviço : "Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </CardProgressStyle>
        </ContentCard>
    );
}

export default CardConcluido;