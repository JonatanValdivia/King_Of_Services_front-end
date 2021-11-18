import styled from "styled-components";

export const ArticleCadastro = styled.article`
    width: 1000px;
    height: auto;
    border: solid 1px #b1b5b2;
    margin-right: auto;
    margin-left: auto;

    @media(min-width: 320px) and (max-width: 890px){
        width: auto;
    }
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
    width: auto;
    height: 40px;
    display: flex;
    justify-content: center;
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

    >input[type='file'] {
        display: none
    }

    > label{
        width: auto;
        height: inherit;
        background-color: var(--primary);
        color: white;
        padding: 1rem;
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
    height: auto;
    margin-right: auto;
    margin-left: auto;
    padding: 50px;

    > form > input{
        width: 400px;
        height: 50px;
        border: solid 1px var(--primary);
        
        margin-bottom: 30px;
        padding-left: 20px;
    }

    >form input:first-child {
        margin-bottom: 2rem;
    }

    >form>div{
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        padding-top: 1rem;
    }

    >form>div>input[type='radio'] {
        margin-left: 1rem;
    }

    > form > textarea{
        width: 400px;
        height: 150px;
        border: solid 1px var(--primary);
        
        padding: 10px;
        margin-bottom: 30px;
        font-family: sans-serif;
    }

    @media(min-width: 320px) and (max-width: 890px){
        padding: 0px;
        width: 90%;

        >form{
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        > form > input{
            width: 100%;
        }

        >form>div{
            width: 100%;
            justify-content: space-around;
        }

        > form > textarea{
            width: 100%;
        }
    }
`

export const Button = styled.div`
    width: 400px;
    height: auto;
    display: flex;
    justify-content: center;
    margin-top: 50px;

    button{
        width: 200px;
        height: 40px;

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