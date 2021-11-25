import HeaderLogout from "../../../components/Header-Logout";
import Footer from "../../../components/Rodape";
import { Album, Content, Dados, Estrelas, Foto, Habilidades, Overlay, StyleComponent1, StyleComponent2 } from "./style";
import Estrela from "../../../assets/estrela.png";
import Imagem from "../../../assets/image.jpg";
import IconLocal from "../../../assets/localizacao.png";
import FacebookIcon from "../../../assets/facebook.png";
import WppIcon from "../../../assets/whatsapp.png";
import { useState, useEffect } from "react";
import jwtDecode from 'jwt-decode';
import api from '../../../services/api';

function PerfilPrestador() {
    const [prestador, setPrestador] = useState([]);
    const token = jwtDecode(localStorage.getItem('token')) ?? [];

    useEffect(() => {
        
        api.get(`Prestadores/${token.data.id}`).then(data => {
            setPrestador(data.data)
        }).catch( () => {

        })

    }, [])
    
    return (
        <>
            <HeaderLogout />
            <Content>
                <Overlay>
                    {console.log(prestador)}
                {/* {prestador.map(element => {
                    return(
                        <>  */}
                            <StyleComponent1>
                               
                                <Foto src={`http://kingofservices.com.br/${prestador.foto}`}>
                                </Foto>
                                <div>
                                    <p>
                                        <img src={WppIcon} id="wpp"/>
                                        {prestador.telefone}
                                    </p>

                                    <p>
                                        <img src={IconLocal}/>
                                        {prestador.rua}, {prestador.numero} - {prestador.cidade}, {prestador.uf}
                                    </p>
                                    <p>
                                        <img src={FacebookIcon}/>
                                        
                                    </p>
                                </div>
                            </StyleComponent1>
                            <StyleComponent2>
                                <Dados>
                                    <h1>{prestador.nome}</h1>
                                    <h2>{prestador.idProfissao}</h2>
                                    <p>{prestador.descricao}</p>
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
                        {/* </>
                    );
                })} */}
                </Overlay>
            </Content>
            <Footer />
        </>
    )
}

export default PerfilPrestador;