import CardSolicitacao from '../../components/CardSolicitacao';
import Header from '../../components/Header';
import HeaderLogout from '../../components/Header-Logout';
import Footer from '../../components/Rodape';
import { Content, Overlay } from './style';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Helmet } from 'react-helmet';
import jwtDecode from 'jwt-decode';

function Solicitacoes(){
  const [solicitacoes, setSolicitacoes] = useState([]);
  const token = jwtDecode(localStorage.getItem('token'));
  const idCliente = token.data.id;
  const login = localStorage.getItem('login') ?? false;

  useEffect(() => {  
    api.get(`http://kingofservices.com.br/SolicitacoesClientes/${idCliente}`).
    then(({data}) =>{
        setSolicitacoes(data);    
    });
  }, []);
console.log(solicitacoes);
  return(
    <>
      <Helmet>
        <title>
            King of Services
        </title>
      </Helmet>
      <Header />
        <Content>
          <Overlay>
            <ul>
              <li className="pedidos">Pedidos</li>
              <li className="pendente">Pendente</li>
              <li className="concluido">Concluido</li>
            </ul>
            <hr/>
            {solicitacoes.map(element => {
              return(
                <CardSolicitacao props={element}/>
              );
            })}
            
          </Overlay>
        </Content>
        <Footer/>
    </>
  );
}

export default Solicitacoes;