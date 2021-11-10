import { Container, ContainerButton, ContainerRegister, Logo, Overlay, Tittle } from "./style";
import imgLogo from "../../assets/Leão.png"
import { Link } from "react-router-dom";


function Cadastro(){
    return(
        <>
            
            <Overlay>
                
                <Container>
                    <Logo>
                        <img src={imgLogo}/>
                    </Logo>
                    <Tittle>
                        <h1>King of Sevices</h1>
                    </Tittle>
                    
                    <ContainerRegister>
                        <p>Você é um prestador de serviços?</p>
                        <ContainerButton>
                            <button>
                                <a href="cadastrotrabalhador">
                                    Cadastrar-se
                                </a>
                            </button>   
                        </ContainerButton>

                        <p>Você quer contratar um prestador de serviços?</p>
                        <ContainerButton>
                            <button>
                                <a href="cadastrocliente">
                                    Cadastrar-se
                                </a>
                            </button>
                        </ContainerButton>

                        <hr/>
                        <p>Você já é cadastrado? <a href="/login" id="login" >Entrar</a> </p>

                    </ContainerRegister>
                </Container>
            </Overlay>
        </>
    );
}

export default Cadastro;