import BannerHome from "../../components/BannerHome";
import Banner from "../../components/BannerApp";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import { Main, Loading, Content, Overlay, Introduction, CircleAbstract, Abstract, GridRight, GridCenter, GridLeft, ContentServicos, OverlayServicos, Circle, Button, ContainerButton } from "./style";
import api from '../../services/api';
import { useEffect, useState } from 'react';
import Footer from "../../components/Rodape";
import FirstDesign from "../../assets/celulardesenho.png"
import SecondDesign from "../../assets/like.png"
import ThirdDesign from "../../assets/apertomãos.png"
import ImgDiarista from "../../assets/diaristas.png"
import ImgCantor from "../../assets/cantor.png"
import ImgEletricista from "../../assets/eletricista2.png"
import ImgEncanador from "../../assets/encanador2.png"
import ImgMecanico from "../../assets/mecanico.png"
import ImgProfessor from "../../assets/professor.png"

function Home() {
    const [prestadores, setPrestadores] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        api.get(`Prestadores`).then(({ data }) => {
            setPrestadores(data)
            setLoading(false)
        });
        console.log(prestadores);
    }, [])

    if (loading) {
        return (
            <Loading>
                <div class="loadingio-spinner-spinner-fc0yl4ooufr">
                    <div class="ldio-lzv6rff8cna">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Loading>

        )
    }

    return (
        <>
            <Header />
            <Main>

                <BannerHome>
                </BannerHome>
                <Cards />
                <Banner />
                <Content>
                    <Overlay>
                        <h1>Sobre <span>nós</span> </h1>
                        <Introduction>
                            <p>
                                A Services Liders é uma empresa de divulgação de prestadores de serviços.
                                <br />
                                Nossa intuição é divulgar pessoas que nescessita de contratação por divulgação.
                            </p>
                            <Abstract>
                                <GridRight>
                                    <CircleAbstract>
                                        <img src={FirstDesign} />
                                    </CircleAbstract>
                                    <p>
                                        Temos plataforma Mobile,
                                        tendo versão somente para
                                        Android
                                    </p>
                                </GridRight>
                                <GridCenter>
                                    <CircleAbstract>
                                        <img src={SecondDesign} />
                                    </CircleAbstract>
                                    <p>
                                        Somos bem avaliados e
                                        temos um compromisso com
                                        a qualidade do serviço.
                                    </p>
                                </GridCenter>
                                <GridLeft>
                                    <CircleAbstract>
                                        <img src={ThirdDesign} />
                                    </CircleAbstract>
                                    <p>
                                        Temos um compromisso e
                                        o dever de ajudar os nossos
                                        colaboradores dando o máximo
                                        de suporte possivel.
                                    </p>
                                </GridLeft>
                            </Abstract>
                        </Introduction>
                    </Overlay>
                </Content>
                <Content>
                    <Overlay>
                        <h1>Serviços</h1>
                        <ContentServicos>
                            <OverlayServicos>
                                <Circle>
                                    <img src={ImgDiarista} />
                                </Circle>
                                <p>
                                    Diarista
                                </p>
                            </OverlayServicos>

                            <OverlayServicos>
                                <Circle>
                                    <img src={ImgEncanador} />
                                </Circle>
                                <p>
                                    Encanador
                                </p>
                            </OverlayServicos>

                            <OverlayServicos>
                                <Circle>
                                    <img src={ImgEletricista} />
                                </Circle>
                                <p>
                                    Eletricista
                                </p>
                            </OverlayServicos>

                            <OverlayServicos>
                                <Circle>
                                    <img src={ImgProfessor} />
                                </Circle>
                                <p>
                                    Professor
                                </p>
                            </OverlayServicos>

                            <OverlayServicos>
                                <Circle>
                                    <img src={ImgCantor} />
                                </Circle>
                                <p>
                                    Cantor
                                </p>
                            </OverlayServicos>

                            <OverlayServicos>
                                <Circle>
                                    <img src={ImgMecanico} />
                                </Circle>
                                <p>
                                    Mecânico
                                </p>
                            </OverlayServicos>
                        </ContentServicos>
                        <ContainerButton>
                            <Button>
                                <button>Ver mais</button>
                            </Button>
                        </ContainerButton>
                    </Overlay>
                </Content>
                <Footer />
            </Main>

        </>
    );
}

export default Home;