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

function ProgressPage() {
    const [aceitar, setAceitar] = useState([]);
    const [andamento, setAndamento] = useState([]);
    const [concluido, setConcluido] = useState([]);
    const token = jwtDecode(localStorage.getItem('token'));
    const idPrestador = token.data.id;
    const login = localStorage.getItem('login') ?? false;

    useEffect(() => {
		api.get(`http://kingofservices.com.br/SolicitacoesPrestadoresAceitar/${idPrestador}`).then(({data}) =>{
            setAceitar(data);
        });
        api.get(`http://kingofservices.com.br/SolicitacoesPrestadoresAndamento/${idPrestador}`).then(({data}) =>{
            setAndamento(data);
            console.log(data);
        });
        api.get(`http://kingofservices.com.br/SolicitacoesPrestadoresConcluido/${idPrestador}`).then(({data}) =>{
            setConcluido(data);
        });
	}, [])

    const [cardShow, setCardShow] = useState(false);

    const CardShow = (event) => {
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

    return (
        <>
            <Header />
            <Content>
                <Overlay>
                    <tr>
                        <td className="pedidos" onClick={() => setStatus(0)}>Pedidos</td>
                        <td className="pendente" onClick={() => setStatus(1)}>Pendente</td>
                        <td className="concluido" onClick={() => setStatus(2)}>Concluido</td>
                    </tr>
                    <hr />
                    {status === 0 && (
                        aceitar.map(element =>{
                            return(
                                <CardPedidos props={element}/>
                            );
                        }) 
                    )}
                    {status === 1 && (
                        andamento.map(element =>{
                            return(
                                <CardProgress props={element}/>
                            );
                        }) 
                    )}
                    {status === 2 && (
                        concluido.map(element =>{
                            return(
                                <CardConcluido  props={element}/>
                            );
                        }) 
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
                    
                    </Overlay>
                </Content>
            <Footer />
        </>
    );
}

export default ProgressPage;