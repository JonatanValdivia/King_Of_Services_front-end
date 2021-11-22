import Header from "../../components/Header";
import HeaderLogout from "../../components/Header-Logout";
import Footer from "../../components/Rodape";
import PerfilDados from "../../components/PerfilPrestadorDados";
import { Overlay } from "./style"


function PerfilPrestador(){
  const login = localStorage.getItem('login') ?? false;
  return(
    <>
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