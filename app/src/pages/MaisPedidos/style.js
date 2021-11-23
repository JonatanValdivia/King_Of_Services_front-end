import styled from "styled-components";

export const BannerStyle = styled.div`
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secundary);
    flex-direction: column;
    padding-top: 50px;
    

    @media(min-width: 320px) and (max-width: 890px){
        width: auto;
        padding: 0px;
    }

    h2{
        color: #FFFFFF;

        span{
            color: var(--primary);
        }
    }
`

export const Overlay = styled.div`
    width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;

    @media(min-width: 320px) and (max-width: 890px){
        margin-top: 130px;
        width: 90vw;
    }

    h2{

        span{
            color: var(--primary);
        }
    }
`

export const Container = styled.div`
    width: 70%;
    height: 70%;
    margin-top: 20px;
    display: flex;
`

export const ContainerFoto = styled.div`
    width: 25%;
    height: 100%;
    border-radius: 30px 30px 30px 30px;

    img{
        width: 100%;
        height: 100%;
    }
`

export const ContainerInformation = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 30px;
    padding-top: 30px;

    h1{
        color: #FFFFFF;
    }

    p{
        width: 70%;
        height: 28%;

        margin-top: 20px;
        color: white;

        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4; /* Definimos quantas linhas queremos */
        display: -webkit-box;
    }
`

export const ContentButton = styled.div`
    width: 60%;
    height: 15%;
    margin-top: 45px;
    display: flex;
    justify-content: center;

    button{
        width: 150px;
        height: 100%;

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

export const ContentSobreServiço = styled.div`
    width: 25%;
    height: 100%;
    border-radius: 20%;

    display: flex;
    justify-content: center;
    flex-direction: column;

    color: white;

    h2{
        display: flex;
        justify-content: center;
    }

    p{
        text-align: justify;
    }
`