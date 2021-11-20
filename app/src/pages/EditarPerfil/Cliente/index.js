import Header from "../../../components/Header-Logout"
import { Button } from "./style";
import { Container, Content, Foto, Inputs, StyleComponent } from "./style";
import { useState } from "react";

function EditarPerfilCliente() {
  const [foto, setFoto] = useState("");
  const fotoHandler = (e) =>{
    let fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (event) => {
        setFoto(event.target.result)   
    }
  }
  return (
    <>
      <Header />
      <Content>
        <Container>
          <StyleComponent>
            <Foto>
              {/* <img src={`http://kingofservices.com.br/${prestador.foto}`} alt="" /> */}
            </Foto>

            <label for='foto'>Editar foto &#187;</label>
            <input type="file" id="foto" accept="image/*" onChange={e => fotoHandler(e)}/>
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