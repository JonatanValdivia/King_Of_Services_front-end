import Header from "../../components/Header";
import Footer from "../../components/Rodape"
import CardProgress from "../../views/ProgressView/CardProgress-Pedidos";
import { Content, Overlay } from "./style";

function ProgressPage() {
    return (
        <>
            <Header />
                <Content>
                    <Overlay>
                    <ul>
                        <li>Pedidos</li>
                        <li>Em andamento</li>
                        <li>Concluido</li>
                    </ul>
                    <hr/>
                        <CardProgress/>
                        <CardProgress/>
                        <CardProgress/>
                        <CardProgress/>
                    </Overlay>
                </Content>
            <Footer />
        </>
    );
}

export default ProgressPage;