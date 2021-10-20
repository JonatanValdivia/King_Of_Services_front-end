import { BannerApp, ContainerApp, ComponentsApp, ContainerMobile, PlayStore, PlayStoreImg } from "./style";
import ImgMobile from "../../assets/Celular.png"
import ImgPlayStore from "../../assets/playstore.png"

function Banner(){
    return(
        <>
            <BannerApp>
                <ContainerApp>
                    <ComponentsApp>
                        <h1>Tenha uma melhor experiência com aplicativo da <span>King Of Service</span></h1>
                        <p>Faça o download do nosso aplicativo</p>

                        <PlayStore>
                            <p>Disponível no</p>
                            <h1>Google PlayStore</h1>
                            <PlayStoreImg>
                                <img src={ImgPlayStore}/>
                            </PlayStoreImg>
                        </PlayStore>
                    </ComponentsApp>
                    <ContainerMobile>
                        <img src={ImgMobile}/>
                    </ContainerMobile>
                </ContainerApp>
            </BannerApp>
        </>
    );
}

export default Banner;