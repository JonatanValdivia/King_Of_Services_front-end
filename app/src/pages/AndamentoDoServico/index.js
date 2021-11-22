import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Rodape";
import CardPedidos from "../../views/ProgressView/ViewCardAndamento";
import CardConcluido from "../../views/ProgressView/ViewCardConcluido";
import CardProgress from "../../views/ProgressView/ViewCardProgress";
import { Content, Overlay } from "./style";

function ProgressPage(props) {

    const [cardShow, setCardShow] = useState(false)

    const CardShow = () => {
        setCardShow(true)
        if(cardShow){
            console.log("sou verdadeiro");
            setCardShow(false)
        }else if(cardShow == false) {
            console.log("sou falso")
        }
    }

    return (
        <>
            <Header />
                <Content>
                    <Overlay>
                    <ul>
                        <li className="pedidos">Pedidos</li>
                        <li className="pendente">Pendente</li>
                        <li className="concluido">Concluido</li>
                    </ul>
                    <hr/>
                        <CardPedidos/>
                        <CardProgress/>
                        <CardConcluido/>
                    </Overlay>
                </Content>
            <Footer />
        </>
    );
}

export default ProgressPage;