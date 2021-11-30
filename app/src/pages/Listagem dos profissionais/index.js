import CardWorker from "../../components/Card List";
import Header from "../../components/Header";
import HeaderLogout from "../../components/Header-Logout";
import Modal from "../../components/Modal";
import Footer from "../../components/Rodape";
import { BannerStyle, Overlay } from "./style";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import api from '../../services/api';
import { Helmet } from 'react-helmet';

function Listagem(props){
    let { profissao } = useParams();
    const [prestadores, setPrestadores] = useState([])
    const login = localStorage.getItem('login') ?? false;
    
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
            <Helmet>
                <title>
                    King of Services
                </title>
            </Helmet>
            { login ? <HeaderLogout/> : <Header/> } 
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