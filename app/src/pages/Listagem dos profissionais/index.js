import CardWorker from "../../components/Card List";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Footer from "../../components/Rodape";
import { BannerStyle, Overlay } from "./style";
import {useEffect, useState} from 'react';

function Listagem(props){
    console.log(props);
    return(
        <>
            <Header/>
            <BannerStyle>
                <Modal/>
            </BannerStyle>
            <Overlay>
            {/* {props.prestadores.map(element => {
                return(
                    <p>Nomes: {element.nome}</p>
                );
            })} */}
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