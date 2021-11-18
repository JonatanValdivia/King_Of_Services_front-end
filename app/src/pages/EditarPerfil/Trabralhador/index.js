import Header from "../../../components/Header-Logout"
import { Button } from "../../CadastroTrabalhador/style";
import { Container, ContainerAction, ContainerHabilidades, Content, Crud, CrudInformation, Foto, Habilidades, Inputs, Separador, StyleComponent } from "./style";
import { BsTrashFill } from "react-icons/bs"

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
                                <input placeholder="Serviço que faz" />
                                <input placeholder="Nome completo" />
                                <input placeholder="Data de nascimento" /><input placeholder="Localização" />
                                <input placeholder="Redes Sociais" />
                                <input placeholder="Nº de celular" />
                                <p>Descrição</p>
                                <textarea placeholder="Escreva um pouco sobre você e com o que você trabalha... (descrição)" ></textarea>
                            </form>
                        </Inputs>

                        <ContainerHabilidades>
                            <div>
                                <p>Habilidades</p>
                                <input placeholder="Habilidade" />
                                <input placeholder="Experiência" id="experience" />
                                <button>Salvar</button>
                                <Crud>
                                    <ul>
                                        <li>Habilidade</li>
                                        <li>Experiência</li>
                                        <li>Ação</li>
                                    </ul>
                                    <CrudInformation>
                                        <Habilidades>
                                            <button >PHP</button>
                                        </Habilidades>
                                        <Separador id="habilidades" />
                                        <Habilidades>
                                            <p>1 Ano</p>
                                        </Habilidades>
                                        <Separador id="habilidades" />
                                        <ContainerAction>
                                            <BsTrashFill/>
                                        </ContainerAction>
                                    </CrudInformation>
                                </Crud>
                            </div>
                        </ContainerHabilidades>

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