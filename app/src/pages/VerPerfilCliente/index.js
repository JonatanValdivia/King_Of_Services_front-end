import Header from "../../components/Header";
import HeaderLogout from "../../components/Header-Logout";
import Footer from "../../components/Rodape";
import { Content, Foto, Overlay, StyleComponent1, StyleComponent2 } from "./style";
import IconLocal from "../../assets/localizacao.png"
import FacebookIcon from "../../assets/facebook.png"
import WppIcon from "../../assets/whatsapp.png";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import jwtDecode from 'jwt-decode';
import api from '../../services/api';
import { Helmet } from 'react-helmet';

function VerPerfilCliente() {
  const [cliente, setCliente] = useState([]);
  let { idCliente } = useParams();

  useEffect(() => {
      
  const formatacao = idCliente.replace(':', '');
    api.get(`http://kingofservices.com.br/Clientes/${formatacao}`).
      then(({data}) =>{
        setCliente(data)    
        console.log(data);
      });
    }, [idCliente])
    const login = localStorage.getItem('login') ?? false;

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
          <StyleComponent1>
            <Foto>
              <img />
            </Foto>

            <div>
              <i className="fa fab fa-bitcoin"></i>100,00
            </div>
          </StyleComponent1>
          <StyleComponent2>
            <h1>{cliente.nome}</h1>
            <div id="datas">
              <p>Registrado deste: {cliente.registro}</p>
              <p></p>
            </div>
            <div id="dados">
              <p>
                <img src={IconLocal}/>
                {cliente.rua}, {cliente.numero} - {cliente.cidade}, {cliente.estado}
              </p>
              <p id="whatsapp">
                <img src={WppIcon} id="wpp" />
                {cliente.telefone}
              </p>
              <p>
                <img src={FacebookIcon} id="facebook"/>
                Facebook
              </p>
            </div>
            <div id="descricao">
              <h3>
                Descricao:
              </h3>
              <p>
              {cliente.descricao}
              </p>
            </div>
          </StyleComponent2>
        </Overlay>
      </Content>
      <Footer />
    </>
  )
}

export default VerPerfilCliente;