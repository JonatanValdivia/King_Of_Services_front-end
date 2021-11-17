import Header from "../../../components/Header-Logout"
import { Container, Content, Foto, StyleComponent, StyleComponent1 } from "./style";

function EditarPerfilCliente() {
  return (
    <>
      <Header />
      <Content>
        <Container>
          <StyleComponent>
            <Foto>
              {/* <img src={`http://kingofservices.com.br/${prestador.foto}`} alt="" /> */}
            </Foto>

            <button>Editar foto</button>
          </StyleComponent>
          <StyleComponent1>
            <input/>
            <input/>
            <input/>
            <input/>
            <input/>
            <input/>
          </StyleComponent1>
        </Container>
      </Content>
    </>
  );
}

export default EditarPerfilCliente;