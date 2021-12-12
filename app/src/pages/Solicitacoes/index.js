import CardAceitar from '../../components/CardSolicitacao';
import CardAndamento from '../../components/CardAndamento';
import CardConcluido from '../../components/CardConcluido';
import CardPago from '../../components/CardPago';
import Header from '../../components/Header';
import HeaderLogout from '../../components/Header-Logout';
import Footer from '../../components/Rodape';
import { Content, Overlay } from './style';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Helmet } from 'react-helmet';
import jwtDecode from 'jwt-decode';

function Solicitacoes(){
  const [aceitar, setAceitar] = useState([]);
  const [andamento, setAndamento] = useState([]);
  const [concluido, setConcluido] = useState([]);
  const [pago, setPago] = useState([]);
  const token = jwtDecode(localStorage.getItem('token'));
  const idCliente = token.data.id;
  const login = localStorage.getItem('login') ?? false;
  const [status, setStatus] = useState(0);

  useEffect(() => {  
    api.get(`http://kingofservices.com.br/SolicitacoesClientesAceitar/${idCliente}`).then(({data}) =>{
      setAceitar(data);  
    });

    api.get(`http://kingofservices.com.br/SolicitacoesClientesAndamento/${idCliente}`).then(({data}) =>{
      setAndamento(data);  
    });

    api.get(`http://kingofservices.com.br/SolicitacoesClientesConcluidas/${idCliente}`).then(({data}) =>{
      setConcluido(data);  
    });
    
    api.get(`http://kingofservices.com.br/SolicitacoesClientesPago/${idCliente}`).then(({data}) =>{
      setPago(data);
      console.log(data)  
      
    });

  }, []);
  

  return(
    <>
      <Helmet>
        <title>
            King of Services
        </title>
      </Helmet>
      { login ? <HeaderLogout/> : <Header/> } 
        <Content>
          <Overlay>
            <tr>
              <td className="pedidos" onClick={() => setStatus(0)}>Pedidos</td>
              <td className="pendente" onClick={() => setStatus(1)}>Pendente</td>
              <td className="concluido" onClick={() => setStatus(2)}>Concluido</td>
              <td className="pago" onClick={() => setStatus(3)}>Pago</td>
              
            </tr>
            <hr/>
            {status === 0 && (
              aceitar.map(element =>{
                return(
                  <CardAceitar props={element}/>
                );
              }) 
            )}
            {status === 1 && (
              andamento.map(element =>{
                return(
                  <CardAndamento props={element}/>
                );
              }) 
            )}
            {status === 2 && (
              concluido.map(element =>{
                return(
                  <CardConcluido props={element}/>
                );
              }) 
            )}
            {status === 3 && (
              pago.map(element =>{
                return(
                  <CardPago props={element}/>
                );
              }) 
            )}
          </Overlay>
        </Content>
        <Footer/>
    </>
  );
}

export default Solicitacoes;