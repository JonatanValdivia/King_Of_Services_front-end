import Header from "../../../components/Header";
import HeaderLogout from "../../../components/Header-Logout";
import Footer from "../../../components/Rodape";
import { Content, Foto, Overlay, StyleComponent1, StyleComponent2 } from "./style";
import IconLocal from "../../../assets/localizacao.png"
import FacebookIcon from "../../../assets/facebook.png"
import WppIcon from "../../../assets/whatsapp.png";
import { useState, useEffect } from "react";
import jwtDecode from 'jwt-decode';
import api from '../../../services/api';
import { Helmet } from 'react-helmet';


function PerfilCliente() {
  const [cliente, setCliente] = useState([]);
    const token = jwtDecode(localStorage.getItem('token')) ?? [];
    const login = localStorage.getItem('login') ?? false;

    useEffect(() => {
        
        api.get(`Clientes/${token.data.id}`).then(data => {
            setCliente(data.data)
            console.log(cliente);
        })
        .catch( () => {

        })

    }, [])
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
              <img src={`http://kingofservices.com.br/${cliente.foto}`} alt={cliente.foto} />
            </Foto>

            <div>
              <i className="fa fab fa-bitcoin"></i>100,00
            </div>
          </StyleComponent1>
          <StyleComponent2>
            <h1>{cliente.nome}</h1>
            <div id="datas">
              <p>Registrado deste: {cliente.registro}</p>
              {/* <p>Último acesso em: 12/12/2021</p> */}
              <p></p>
            </div>
            <div id="dados">
              <p>
                <img src={IconLocal}/>
                {cliente.rua}, {cliente.numero} - {cliente.cidade}, {cliente.uf}
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

export default PerfilCliente;