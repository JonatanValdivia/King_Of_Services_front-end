import Header from "../../components/Header";
import Footer from "../../components/Rodape";
import { Overlay } from "../Listagem dos profissionais/style";
import { BannerStyle, ContainerFoto } from "./style";

function MaisPedidos() {
    return (
        <>
            <Header />
            <BannerStyle>
                <h2>Profissional em <span>Destaque</span></h2>
                <ContainerFoto></ContainerFoto>
            </BannerStyle>
            <Overlay>

            </Overlay>
            <Footer />
        </>
    );
}

export default MaisPedidos;