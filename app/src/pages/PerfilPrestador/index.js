import Header from "../../components/Header";
import HeaderLogout from "../../components/Header-Logout";
import Footer from "../../components/Rodape";
import PerfilDados from "../../components/PerfilPrestadorDados";
import { Overlay } from "./style";
import { Helmet } from 'react-helmet';


function PerfilPrestador(){
  const login = localStorage.getItem('login') ?? false;
  return(
    <>
      <Helmet>
        <title>
            King of Services
        </title>
      </Helmet>
      { login ? <HeaderLogout/> : <Header/> } 
      <Overlay>
        <PerfilDados>
        </PerfilDados>
      </Overlay>
      <Footer/>
    </>
  )
}

export default PerfilPrestador;