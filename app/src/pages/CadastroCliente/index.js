import Input from "../../components/Input";
import { Container, FormContainer } from "./styles";
import imgLogo from "../../assets/Leão.png"

function CadastroCliente(){

    return(
        <Container>
        <FormContainer>
            <img src={imgLogo}/>
            <h1>King of Services</h1>

            <button id="facebook">Facebook</button>
            <button id="Google">Google</button>
            <hr/>
           <input placeholder="Email" />
           <input placeholder="Senha" />
           <button>Entrar</button>
           <hr/>

            <p>Você já é cadastrado? Entrar</p>

        </FormContainer>
    </Container>

    );

}

export default CadastroCliente;