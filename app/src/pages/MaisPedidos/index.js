import Header from "../../components/Header";
import Footer from "../../components/Rodape";
import { BannerStyle, Container, ContainerFoto, ContainerInformation, ContentButton, ContentSobreServiço, Overlay } from "./style";
import Diarista from "../../assets/Rosana.png"
import CardWorker from "../../components/Card List";
import { Helmet } from 'react-helmet';

function MaisPedidos(props) {
    return (
        <>
            <Helmet>
                <title>
                    King of Services
                </title>
            </Helmet>
            <Header />
            <BannerStyle>
                <h2>Profissional em <span>Destaque</span></h2>
                <Container>
                    <ContainerFoto>
                        <img src={Diarista}/>
                    </ContainerFoto>
                    <ContainerInformation>
                        <h1>Rosana da Silva</h1>
                        <h2>26 anos</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                            Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <ContentButton>
                            <button>Solicitar serviço</button>
                        </ContentButton>
                    </ContainerInformation>
                    <ContentSobreServiço>
                        <h2>Sobre a <span>área</span></h2>
                        <p>Trata-se da pessoa que presta serviços domésticos de forma contínua, 
                            recebendo mensalmente pelas suas tarefas. Ao contrário das empregadas domésticas, 
                            as diaristas não têm vínculo trabalhista e prestam seus serviços de forma autônoma.</p>
                    </ContentSobreServiço>
                </Container>
            </BannerStyle>
            <Overlay>
                <h2>Top 10 <span>Diaristas</span></h2>
            </Overlay>
            <Footer />
        </>
    );
}

export default MaisPedidos;