import { CardServices, ContainerCards, ContainerImg, Services, SectionCards, TittleServices } from "./style";
import ImgEncanador from "../../assets/Encanador.png"
import ImgEletricista from "../../assets/Eletricista.png"
import ImgDiarista from "../../assets/Diarista.png"

function Cards() {
    return(
        <>
            <ContainerCards>
                    <TittleServices>
                        <h1>Principais serviços<span>mais pedidos</span></h1>
                    </TittleServices>
                <SectionCards>
                    <CardServices>
                        <ContainerImg>
                            <img src={ImgDiarista}/>
                        </ContainerImg>
                        <Services>
                            <h4>Diarista</h4>
                            <p>Ver Prestadores</p>
                        </Services>
                    </CardServices>

                    <CardServices>
                    <ContainerImg>
                            <img src={ImgEletricista}/>
                        </ContainerImg>
                        <Services>
                            <h4>Eletricista</h4>
                            <p>Ver Prestadores</p>
                        </Services>
                    </CardServices>

                    <CardServices>
                        <ContainerImg>
                            <img src={ImgEncanador}/>
                        </ContainerImg>
                        <Services>
                            <h4>Encanador</h4>
                            <p>Ver Prestadores</p>
                        </Services>
                    </CardServices>

                </SectionCards>  
            </ContainerCards>
        </>
    );
}

export default Cards;