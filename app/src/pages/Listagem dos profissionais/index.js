import CardWorker from "../../components/Card List Worker";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Footer from "../../components/Rodape";
import { BannerStyle, Overlay } from "./style";

function Listagem(){
    return(
        <>
            <Header/>
            <BannerStyle>
                <Modal/>
            </BannerStyle>
            <Overlay>
                <CardWorker/>
                <CardWorker/>
                <CardWorker/>
                <CardWorker/>
                <CardWorker/>
                <CardWorker/>
                <CardWorker/>
                <CardWorker/>
                <CardWorker/>
            </Overlay>
            <Footer/>
        </>
    );
}

export default Listagem;