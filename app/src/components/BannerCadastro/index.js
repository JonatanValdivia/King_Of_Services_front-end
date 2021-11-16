import { BannerCadastroStyle, ModalApp, Overlay, PlayStore, PlayStoreImg, Tittle } from "./style";
import ImgPlayStore from "../../assets/playstore.png"

function BannerCadastro(){
    return(
        <>
            <BannerCadastroStyle>
                <Overlay>
                    <Tittle>
                        <h1>Receba clientes através de um <span id="textAperence"> aplicativo </span> de serviços profissionais</h1>
                        <p>Divulgue seus serviços para centenas de pessoas!</p>
                    </Tittle>
                    <ModalApp>
                        <h3>Nós <span class="textAperenceApp">facilitamos</span> para  você</h3>
                        <p>Comece a encontrar mais <span class="textAperenceApp">clientes</span></p>
                        <PlayStore>
                            <p>Disponível no</p>
                            <h1>Google PlayStore</h1>
                            <PlayStoreImg>
                                <img src={ImgPlayStore}/>
                            </PlayStoreImg>
                        </PlayStore>
                    </ModalApp>
                </Overlay>
            </BannerCadastroStyle>
        </>
    );
}

export default BannerCadastro;