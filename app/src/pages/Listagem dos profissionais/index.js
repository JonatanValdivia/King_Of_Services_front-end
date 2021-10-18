import CardWorker from "../../components/Card List";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Footer from "../../components/Rodape";
import { BannerStyle, Overlay } from "./style";
import {useEffect, useState} from 'react';

function Listagem(prestadores){
    console.log(prestadores);
    return(
        <>
            <Header/>
            <BannerStyle>
                <Modal/>
            </BannerStyle>
            <Overlay>
            {/* {prestadores.map(element => {
                return(
                    <p>Nomes: {element.nome}</p>
                );
            })} */}
                 
            </Overlay>
            <Footer/>
        </>
    );
}

export default Listagem;