import Modal from "../Modal";
import { Title } from "../Modal/style";
import { BannerStyle } from "./style";

function BannerHome(){
    return(
        <>
            <BannerStyle>
                <Title>
                        <h1>
                            Titulo do Modal
                        </h1>
                        <p>
                            Titulo do Modal
                        </p>
                    </Title>
                <Modal/>
            </BannerStyle>
        </>
    )
}

export default BannerHome;