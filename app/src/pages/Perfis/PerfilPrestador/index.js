import Header from "../../../components/Header";
import Footer from "../../../components/Rodape";
import { Album, Content, Dados, Estrelas, Foto, Habilidades, Overlay, StyleComponent1, StyleComponent2 } from "./style";
import Estrela from "../../../assets/estrela.png";
import Imagem from "../../../assets/image.jpg";

function PerfilPrestador() {
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
                            <p>1199990000</p>

                            <p>Rua Luiz Belli, 157 - Itapevi, SP</p>
                            <p>Thaynara</p>
                        </div>

                        <button>Solicitar serviço</button>
                    </StyleComponent1>
                    <StyleComponent2>
                        <Dados>
                            <h1>Thaynara</h1>
                            <h2>Jovem Aprendiz</h2>
                            <p>Uma breve descrição: bla bla bla bla</p>
                            <Estrelas>
                                <img src={Estrela} />
                                <img src={Estrela} />
                                <img src={Estrela} />
                                <img src={Estrela} />
                                <img src={Estrela} />
                                <p>5/5</p>
                            </Estrelas>
                        </Dados>
                        <Habilidades>
                            <h3>Habilidades</h3>
                            <div>
                                <p>PHP</p>
                                <p>Node</p>
                                <p>MySQL</p>
                                <p>React</p>
                            </div>
                        </Habilidades>
                        <Album>
                            <h1>Titulo</h1>
                            <div>
                                <img src={Imagem} />
                                <img src={Imagem} />
                                <img src={Imagem} />
                                <img src={Imagem} />
                                <img src={Imagem} />
                                <img src={Imagem} />
                            </div>
                        </Album>
                    </StyleComponent2>
                </Overlay>
            </Content>
            <Footer />
        </>
    )
}

export default PerfilPrestador;