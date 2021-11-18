import Modal from "../Modal";
import { Title } from "../Modal/style";
import { BannerStyle } from "./style";

function BannerHome() {
    return (
        <>
            <BannerStyle>
                <Title>
                    <h1>
                        Seja um lider no seu serviço!
                    </h1>
                    <p>
                        Encontre os melhores prestadores de serviço próximo a você
                    </p>
                </Title>
                <Modal />
            </BannerStyle>
        </>
    )
}

export default BannerHome;