import styled from "styled-components";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
    }
`;

export const ContainerLogin = styled.div`
    width: 600px;
    height: 470px;

    box-shadow: 0px 0px 10px 0px #a19e9d;
    
    @media(min-width: 320px) and (max-width: 890px){
        width: 100vw;
       
    }
`;

export const ContainerInputs = styled.div`
    width: 400px;
    height: 150px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;

    >input{
        width: 400px;
        height: 45px;

        border: none;
        border-radius: 40px;
        box-shadow: 0px 0px 5px 0px;

        margin-top: 20px;
        padding-left: 30px;

        font-family: sans-serif;
        font-size: 15px;
        
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        
        >input{
            width: 95%;
        }
    }
`

export const Tittle = styled.div`
    width: 400px;
    height: 50px;

    margin-left: auto;
    margin-right: auto;

    >h1{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 2.5em;
        color: var(--primary);

        display: flex;
        justify-content: center;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        >h1{
            width: 100%;
            font-size: 2em;
            text-align: center;
        }
    }
    
`

export const Logo = styled.div`
    width: 70px;
    height: 90px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

    >img{
        width: 70px;
        height: 90px;
    }
`

export const ContainerButton = styled.div`
    width: 250px;
    height: 50px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
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