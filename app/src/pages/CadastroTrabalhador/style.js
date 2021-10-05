import styled from "styled-components"

export const ArticleCadastro = styled.article`
    width: 1000px;
    height: 1500px;
    border: solid 1px #b1b5b2;

    margin-right: auto;
    margin-left: auto;
`

export const ImgProfileStyle = styled.div`
    width: 200px;
    height: 200px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;

    >img{
        width: inherit;
        height: inherit;
    }
`

export const ContainerButton = styled.div`
    width: 150px;
    height: 40px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 35px;

    >button{
        width: inherit;
        height: inherit;

        background-color: var(--primary);
        color: white;
        cursor: pointer;
        border: none;

        font-size: 1em;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;

        border-radius: 20px;
    }
`

export const Inputs = styled.div`
    width: 500px;
    height: 650px;
    background-color: lavender;
    margin-right: auto;
    margin-left: auto;
    padding: 50px;

    >input{
        width: 400px;
        height: 50px;
        border: solid 1px var(--primary);
        
        margin-bottom: 30px;
        padding-left: 20px;
    }

    >textarea{
        width: 400px;
        height: 150px;
        border: solid 1px var(--primary);
        
        padding: 10px;
        font-family: sans-serif;
    }
`