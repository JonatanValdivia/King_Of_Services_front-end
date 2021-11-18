import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: auto;

    align-items: center;
    display: grid;
    justify-content: center;

    grid-template-columns: 1fr 1fr;
    grid-template-areas: "esquerda direita";

    @media(min-width: 320px) and (max-width: 600px){
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    @media(min-width: 601px) and (max-width: 890px){
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }


`;

export const GridEsquerda = styled.div`
    width: inherit;
    height: 100vh;
    background-color: var(--primary);
    grid-area: esquerda;

    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media(min-width: 320px) and (max-width: 890px){
        display: none;
    }

`

export const ContainerLogo = styled.div`
    width: 25vw;
    height: auto;

    img{
        width: 25vw;
        height: auto;
    }

    @media(min-width: 320px) and (max-width: 890px){
        display: none;
    }
`

export const ContainerLogoLeao = styled.div`
    width: 7vw;
    height: auto;
    
    margin-left: auto;
    margin-right: auto;

    img{
        width: 7vw;
        height: 17vh;
    }

    @media(min-width: 320px) and (max-width: 890px){
        display: none;
    }
`

export const GridDireita = styled.div`
    width: inherit;
    height: inherit;
    grid-area: direita;

    >h1{
        font-size: 100rem;
    }

    .endereco{
        display: none;

        p{
            margin: 20px 0px 20px 0px;
            font-size: 1.2rem;
        }

        >#resultadoPositivo{
            margin-left: auto;
            margin-right: auto;
            display: none;
            align-items: center;
            width: 100%;
            height: 100px;
            background-color: rgba(7, 145, 0, 0.2);
            border: solid 3px rgba(12, 255, 0, 0.3);

            >p{
                color: #044201;
                width: 100%;
                font-weight: bold;
                text-align: center;
            }
        }

        > #resultadoNegativo{
            margin-left: auto;
            margin-right: auto;
            display: none;
            align-items: center;
            width: 100%;
            height: 100px;
            background-color: rgba(130, 0, 0, 0.2);
            border: solid 3px rgba(255, 0, 0, 0.3);

            >p{
                width: 100%;
                color: #451313;
                text-align: center;
                font-weight: bold;
            }
        }
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        height: auto;
        margin: auto;
    }
    
`

export const ContainerFG = styled.div`
    margin-top: -40px;
    padding-left: 180px;

    p{
        margin-top: 10px;
        font-size: 0.8em;

        span{
            color: blue;
        }
    }

    @media(min-width: 320px) and (max-width: 890px){
        display: none;
    }
    
`

export const FormContainer = styled.div`
    width: 500px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px;

    h1 {
        text-align: center;
        margin-bottom: -20px;
    }

    p{
        font-size: 0.8em;
        color: var(--primary);
        cursor: pointer;
    }

    button{
        width: 300px;
        height: 50px;

        background-color: var(--primary);
        color: white;
        border: 0px;

        font-weight: bold;
        font-size: 1em;
        border-radius: 40px;
        cursor: pointer;

        margin-left: 50px;
        margin-top: 10px;
        margin-top: 30px;

        box-shadow: 0px 0px 0px 0px;

        :hover{
            box-shadow: 0px 0px 10px 0px #7a7878;
        }
    }

    hr{
        margin-top: 10px;
        margin-bottom: 10px;
    }

    section>input{
        width: 400px;
        height: 40px;
        border: none;
        border-radius: 40px;
        box-shadow: 0px 0px 5px 0px;

        margin-bottom: 10px;
        margin-top: 10px;
        padding-left: 30px;

        font-family: sans-serif;
        font-size: 15px;
   
    }

    section>div {
        width: 109px;
    }

    section>div>input[type='radio'] {
        margin-left: 1rem;
        display: table-cell;
        vertical-align: middle;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        padding: 0px;

        h1{
            text-align: center;
            margin-bottom: 20px;
        }

        >section{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-left: 1rem;
            padding-right: 1rem;

            >p{
                margin-top: 20px;
                font-size: 2rem;
                font-style: italic;
            }
        }

        section>input{
            width: 100%;
        }

        section>label{
            width: 100%;
        }

        section>div{
            width: auto;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
        }

        section>button{
            width: 70%;
            margin-left: 0px;
            margin-top: 20px;
        }
    }
`;