import { ContainerButton, ContainerInputs, ContainerLogin, Logo, Overlay, Tittle } from "./style";
import imgLogo from "../../assets/Leão.png"

function Login(){
    return(
        <Overlay>
            <ContainerLogin>
                <Logo>
                    <img src={imgLogo}/>
                </Logo>
                <Tittle>
                    <h1>King of Sevices</h1>
                </Tittle>
                <ContainerInputs>
                    <input placeholder="Email"/>
                    <input placeholder="Senha"/>
                </ContainerInputs>
                <ContainerButton>
                    <button>Entrar</button>
                </ContainerButton>
            </ContainerLogin>
        </Overlay>
    );
}

export default Login;