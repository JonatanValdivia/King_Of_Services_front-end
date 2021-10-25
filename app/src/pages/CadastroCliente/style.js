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
    height: 137vh;
    background-color: var(--primary);
    grid-area: esquerda;
`

export const ContainerLogo = styled.div`
    
`

export const GridDireita = styled.div`
    width: inherit;
    height: inherit;
    grid-area: direita;
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
    padding: 50px;

    h1 {
        margin-bottom: 10px;
        text-align: center;
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

        margin-left: auto;
        margin-right: auto;
        /* margin-bottom: 20px; */
        margin-top: 10px;
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