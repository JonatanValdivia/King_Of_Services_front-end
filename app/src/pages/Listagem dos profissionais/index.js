import CardWorker from "../../components/Card List";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Footer from "../../components/Rodape";
import { BannerStyle, Overlay } from "./style";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import api from '../../services/api';

function Listagem(props){
    let { profissao } = useParams();
    const [prestadores, setPrestadores] = useState([])
    useEffect(() => {
        
        const formatacao = profissao.replace(':', '');
		api.get(`http://kingofservices.com.br/PesquisarPrestador/${formatacao}`).
        then(({data}) =>{
            setPrestadores(data)    
            console.log(data);
        });
	}, [profissao])
    return(
        <>
            <Header/>
            <BannerStyle>
                <Modal/>
            </BannerStyle>
            <Overlay>
            {prestadores.map(element => {
                return(
                    <CardWorker props={element}/>
                );
            })}
            </Overlay>
            <Footer/>
        </>
    );
}

export default Listagem;