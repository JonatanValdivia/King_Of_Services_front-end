import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: auto;

    align-items: center;
    display: grid;
    justify-content: center;

    grid-template-columns: 1fr 1fr;
    grid-template-areas: "esquerda direita";


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
`

export const ContainerLogo = styled.div`
    width: 25vw;
    height: auto;

    img{
        width: 25vw;
        height: auto;
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
`

export const FormContainer = styled.form`
    width: 500px;
    height: auto;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px;

    @keyframes go-back {
        0%{transform: translateX(1000px);}
        100%{transform: translateX(0);}
    }  

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


    form>input{
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

    form>div {
        width: 109px;
    }

    form>div>input[type='radio'] {
        margin-left: 1rem;
        display: table-cell;
        vertical-align: middle;
    }


`;