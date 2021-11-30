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