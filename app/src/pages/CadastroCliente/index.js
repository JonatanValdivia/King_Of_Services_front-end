import { Container, GridDireita, GridEsquerda, ContainerFG, ContainerLogo, ContainerLogoLeao, FormContainer } from "./style.js";
import imgLeao from "../../assets/LeãoBranco.png";
import ImgLogoKOF from "../../assets/KingofServices.png";
import api from "../../services/api";
import apiCep from "../../services/apiCep";
import {useEffect, useState} from 'react';
import ViewCadastro from "../../views/ViewCadastro/index.js";


function CadastroCliente(){

    return(
        <Container>
            <GridEsquerda>
                <ContainerLogo>
                    <ContainerLogoLeao>
                        <img src={imgLeao}/>
                    </ContainerLogoLeao>
                    <img src={ImgLogoKOF}/>
                </ContainerLogo>
            </GridEsquerda>
            <GridDireita>
                <FormContainer>
                    <h1>
                        Cadastro
                    </h1>
                        <ViewCadastro/>
                </FormContainer>
                <ContainerFG>
                    <p>
                        Continuar com o 
                        <a href="/cadastroFacebookGoogle"> 
                            <span> Google </span>
                        </a>
                    </p>
                    <p>
                        Continuar com o 
                        <a href="/cadastroFacebookGoogle"> 
                            <span> Facebook</span>
                        </a>
                    </p>
                </ContainerFG>
            </GridDireita>
        </Container>
    );
}

export default CadastroCliente;