import Input from "../../components/Input";
import { Container, FormContainer } from "./styles";

function Login(){

    return(
        <Container>
        <FormContainer>
            <h1>Bem-vindo a</h1>
           <h1>King of Services</h1> 
           <input placeholder="Informe o que precisa..." />
           <button>Entrar</button>
        </FormContainer>
    </Container>

    );

}

export default Login;