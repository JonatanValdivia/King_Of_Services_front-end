import BannerCadastro from "../../components/BannerCadastro";
import Header from "../../components/Header";
import { ArticleCadastro, ContainerButton, ImgProfileStyle, Inputs } from "./style";
import ImgProfile from "../../assets/Profile.png"

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
                    <input placeholder="Nome completo"/>
                    <input placeholder="Função"/>
                    <input placeholder="Atividade"/>
                    <input placeholder="Preço por serviço"/>
                    <input placeholder="Número de telefone"/>
                    <p>Descrição</p>
                    <textarea placeholder="Escreva um pouco sobre você e com o que você trabalha..."></textarea>
                </Inputs>
            </ArticleCadastro>
        </>
    );
}

export default CadastroTrabalhador;