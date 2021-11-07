import Header from "../../../components/Header";
import Footer from "../../../components/Rodape";
import { Content, Foto, Overlay, StyleComponent1, StyleComponent2 } from "./style";

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
                      <div id="dados">
                        <p>
                          <i class="fa fas fa-map-marker"></i>
                          Rua Luiz Belli, 157 - Itapevi, SP
                        </p>
                        <p id="whatsapp">
                          <i className="fa fab fa-whatsapp"></i>
                          (11)99990000
                        </p>
                        <p>
                          <i className="fa fab fa-facebook-square"></i>
                          Facebook</p>
                      </div>
                      <div id="datas">
                        <p>Registrado deste: 12/12/2021</p>
                        <p>Último acesso em: 12/12/2021</p>
                        <p></p>
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