import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Rodape";
import CardPedidos from "../../views/ProgressView/ViewCardAndamento";
import CardConcluido from "../../views/ProgressView/ViewCardConcluido";
import CardProgress from "../../views/ProgressView/ViewCardProgress";
import { Content, Overlay } from "./style";

function ProgressPage(props) {

    const [cardShow, setCardShow] = useState(false)

    // const CardShow = () => {
    //     setCardShow(true)
    //     if(cardShow){
    //         console.log("sou verdadeiro");
    //         setCardShow(false)
    //     }else if(cardShow == false) {
    //         console.log("meio falso")
    //     }else{
    //         console.log("falso");
    //     }
    // }

    return (
        <>
            <Header />
                <Content>
                    <Overlay>
                    <tr>
                        <td className="pedidos">Pedidos</td>
                        <td className="pendente" >Pendente</td>
                        <td className="concluido" >Concluido</td>
                    </tr>
                    <hr/>
                        <CardPedidos/>
                        <CardProgress />
                        <CardConcluido />
                    </Overlay>
                </Content>
            <Footer />
        </>
    );
}

export default ProgressPage;