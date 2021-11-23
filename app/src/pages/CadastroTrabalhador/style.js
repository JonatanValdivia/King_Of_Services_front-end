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
        margin-top: 10px;
        margin-bottom: 20px;
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

    >form>select{
        width: 400px;
        height: 50px;
        margin-bottom: 30px;
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

    >form >#resultadoPositivo{
        margin-left: auto;
        margin-right: auto;
        display: none;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: rgba(7, 145, 0, 0.2);
        border: solid 3px rgba(12, 255, 0, 0.3);
        margin-bottom: 50px;

        >p{
            color: #044201;
            font-weight: bold;
            text-align: center;
            font-size: 1rem;
        }
    }

    >form >#resultadoNegativo{
        margin-left: auto;
        margin-right: auto;
        display: none;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: rgba(130, 0, 0, 0.2);
        border: solid 3px rgba(255, 0, 0, 0.3);
        margin-bottom: 50px;

        >p{
            color: #451313;
            text-align: center;
            font-weight: bold;
            font-size: 1rem;
        }
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

        >form>select{
            width: 80%;
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
    width: auto;
    height: auto;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;

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

    @media(min-width: 320px) and (max-width: 890px){
        width: auto;
    }

`