import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Rodape";
import CardPedidos from "../../views/ProgressView/ViewCardAndamento";
import CardConcluido from "../../views/ProgressView/ViewCardConcluido";
import CardProgress from "../../views/ProgressView/ViewCardProgress";
import { Content, Overlay } from "./style";

function ProgressPage(props) {

    const [cardShow, setCardShow] = useState(false);

    const pedidos = document.getElementsByClassName("pedidos")[0];
    const pendente = document.getElementsByClassName("pendente")[0];
    const concluido = document.getElementsByClassName("concluido")[0];
    const cardAceitar = document.getElementsByClassName('cardAceitar')[0];

    const CardShow = (event) => {
        console.log(event.target)
        if (event.target == pedidos) {

        }
        // if(cardShow){
        //     console.log(cardAceitar);
        // }else if(cardShow) {
        //     setCardShow(true)
        // }else{
        //     setCardShow(true)
        // }

        // {
        //     const card = CardShow?(<><h1>Hello Word</h1></>) : (<div hidden></div>);
        //     console.log(card)
        // }
    }


    const [status, setStatus] = useState(0);

    console.log(status);

    return (
        <>
            <Header />
            <Content>
                <Overlay>
                    <tr onClick={(event) => CardShow(event)}>
                        <td className="pedidos" onClick={() => setStatus(0)} >Pedidos</td>
                        <td className="pendente" onClick={() => setStatus(1)} >Pendente</td>
                        <td className="concluido" onClick={() => setStatus(2)} >Concluido</td>
                    </tr>
                    <hr />
                    {status === 0 && (
                        <CardPedidos />
                    )}
                    {status === 1 && (
                        <CardProgress />
                    )}
                    {status === 2 && (
                        <CardConcluido />
                    )}
                </Overlay>
            </Content>
            <Footer />
        </>
    );
}

export default ProgressPage;