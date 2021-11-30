import { ButtonProgress, CardProgressStyle, ContentCard, Profile } from './style';
function CardSolicitacao(){
  return(
    <ContentCard>
            <CardProgressStyle>
                <Profile/>
                <p>Nome completo, idade</p>
                <p>Profissao</p>
                <ButtonProgress>
                    A aceitar...
                </ButtonProgress>
                <p id="description">Uma breve descrição sobre o serviço solicitado: "Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </CardProgressStyle>
        </ContentCard>
  );
}

export default CardSolicitacao;