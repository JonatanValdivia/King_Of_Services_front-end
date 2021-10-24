import Header from "../../components/Header";
import Footer from "../../components/Rodape";
import PerfilDados from "../../components/PerfilPrestadorDados";
import { Overlay } from "./style"


function PerfilPrestador(){
  return(
    <>
      <Header/>
      <Overlay>
        <PerfilDados>
        </PerfilDados>
      </Overlay>
      <Footer/>
    </>
  )
}

export default PerfilPrestador;