import { ButtonProgress, CardProgressStyle, ContentCard } from "./style";

function CardProgress(){
    return(
        <ContentCard>
            <CardProgressStyle>
                {/* <Profile/> */}
                <p>Fulano de Tal, 35</p>
                <ButtonProgress>
                    <button>Aceitar</button>
                </ButtonProgress>
                <p id="description">Uma breve descrição sobre o serviço : "Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </CardProgressStyle>
        </ContentCard>
    );
}

export default CardProgress;