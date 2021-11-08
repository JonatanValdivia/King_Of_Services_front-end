import Header from "../../../components/Header";
import Footer from "../../../components/Rodape";
import { Content, Foto, Overlay, StyleComponent1, StyleComponent2 } from "./style";
import IconLocal from "../../../assets/localizacao.png"
import FacebookIcon from "../../../assets/facebook.png"
import WppIcon from "../../../assets/whatsapp.png"


function PerfilCliente() {
  return (
    <>
      <Header />
      <Content>
        <Overlay>
          <StyleComponent1>
            <Foto>
              {/* <img src={`http://kingofservices.com.br/${prestador.foto}`} alt="" /> */}
            </Foto>

            <div>
              <i className="fa fab fa-bitcoin"></i>100,00
            </div>
          </StyleComponent1>
          <StyleComponent2>
            <h1>Thaynara, 28</h1>
            <div id="datas">
              <p>Registrado deste: 12/12/2021</p>
              <p>Último acesso em: 12/12/2021</p>
              <p></p>
            </div>
            <div id="dados">
              <p>
                <img src={IconLocal}/>
                Rua Luiz Belli, 157 - Itapevi, SP
              </p>
              <p id="whatsapp">
                <img src={WppIcon} id="wpp" />
                (11)99990000
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint obcaecati corporis unde. Saepe, repudiandae similique. Dolore beatae, exercitationem, autem debitis doloribus unde odit quibusdam commodi repellat consequuntur dolor sed rerum?
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