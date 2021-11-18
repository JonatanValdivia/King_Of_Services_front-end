import Header from "../../../components/Header-Logout"
import { Button } from "../../CadastroTrabalhador/style";
import { Container, Content, Foto, Inputs, StyleComponent } from "./style";

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

            <Inputs>
              <form>
                <input placeholder="Nome completo" />
                <input placeholder="Data de nascimento" /><input placeholder="Localização" />
                <input placeholder="Redes Sociais" />
                <input placeholder="Nº de celular" />
                <p>Descrição</p>
                <textarea placeholder="Escreva um pouco sobre você e com o que você trabalha... (descrição)" ></textarea>
              </form>
            </Inputs>

            <Button>
              <button>Salvar</button>
            </Button>

          </StyleComponent>
        </Container>
      </Content>
    </>
  );
}

export default EditarPerfilCliente;