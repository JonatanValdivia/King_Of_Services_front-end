import BannerCadastro from "../../components/BannerCadastro";
import Header from "../../components/Header";
import { ArticleCadastro, ContainerButton, ImgProfileStyle, Inputs } from "./style";
import ImgProfile from "../../assets/Profile.png";

function CadastroTrabalhador(){

    return(
        <>
            <Header/>
            <BannerCadastro/>
            <ArticleCadastro>
                <ImgProfileStyle>
                    <img src={ImgProfile}/>
                </ImgProfileStyle>
                <ContainerButton>
                    <button>Editar Foto</button>
                </ContainerButton>
                <Inputs>
                {/* {
                    "idSexo": "1",
                    "idEndereco": {
                        "uf":"SP",
                        "cidade":"Cidade3",
                        "bairro":"Bairro3",
                        "rua":"Rua3",
                        "numero":"133",
                        "complemento":"33",
                        "cep":"53333-222"
                    },
                    "idProfissao": "4",
                    "nome": "Gilberto Henrique Bosques",
                    "email": "gilbertoHenriqueBosques@outlook.com",
                    "senha": "123",
                    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse \ncillum",
                    "telefone": "(11)99999-5555",
                    "dataNascimento": "1974-05-24",
                    "foto": ""
	            } */}
                    <input placeholder="Nome completo"/>
                    <input placeholder="Profissão"/>
                    <p>Endereço</p>
                    <input placeholder="cep" id="cep" /*focusout={search()}*//>
                    <input placeholder="Uf"/>
                    <input placeholder="Cidade"/>
                    <input placeholder="E-mail"/>
                    <input placeholder="Bairro"/>
                    <input placeholder="Rua"/>
                    <input placeholder="Número"/>
                    <input placeholder="Complemento (opcional)"/>
                    
                    <input placeholder="Senha"/>
                    <textarea placeholder="Escreva um pouco sobre você e com o que você trabalha... (descrição)"></textarea>
                    <input placeholder="Telefone"/>
                    <input placeholder="dataNascimento"/>
                    {/* <input placeholder="Atividade"/> */}
                    {/* <input placeholder="Preço por serviço"/> */}
                    <input placeholder="Número de telefone"/>
                </Inputs>
            </ArticleCadastro>
        </>
    );
}

export default CadastroTrabalhador;