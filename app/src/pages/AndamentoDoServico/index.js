import { useState, useEffect } from "react";
import Header from "../../components/Header";
import HeaderLogout from "../../components/Header-Logout";
import Footer from "../../components/Rodape";
import CardPedidos from "../../views/ProgressView/ViewCardAndamento";
import CardConcluido from "../../views/ProgressView/ViewCardConcluido";
import CardProgress from "../../views/ProgressView/ViewCardProgress";
import { Content, Overlay } from "./style";
import api from '../../services/api';
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";

function ProgressPage(props) {
    const [clienteSolicitacao, setClienteSolicitacao] = useState([]);
    const token = jwtDecode(localStorage.getItem('token'));
    const idPrestador = token.data.id;
    const login = localStorage.getItem('login') ?? false;

    useEffect(() => {
		api.get(`http://kingofservices.com.br/SolicitacoesPrestadores/${idPrestador}`).then(({data}) =>{
            setClienteSolicitacao(data)    
            console.log(data);
            console.log(idPrestador)
        });
	}, [])

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
            <Helmet>
                <title>
                    King of Services
                </title>
            </Helmet>
            { login ? <HeaderLogout/> : <Header/> }
                <Content>
                    <Overlay>
                    <ul>
                        <li className="pedidos">Pedidos</li>
                        <li className="pendente">Pendente</li>
                        <li className="concluido">Concluido</li>
                    </ul>
                    <hr/>
                    {clienteSolicitacao.map(element => {
                        return(
                            <CardPedidos props={element}/>
                        );
                    })}   
                    </Overlay>
                </Content>
            <Footer />
        </>
    );
}

export default ProgressPage;