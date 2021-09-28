import { Container } from "./style";

function Input(){
    return(
        <Container>
            <input placeholder="Informe o que precisa..." />
            <button>Buscar</button>
        </Container>
    );
}

export default Input;