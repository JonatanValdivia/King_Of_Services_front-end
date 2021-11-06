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

export const Container = styled.form`
    width: 600px;
    height: 500px;

    box-shadow: 0px 0px 20px #00000055;

    > h1 {
        text-align: center;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;

    }
    
`;

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

        > h1 {
            text-align: center;
            font-size: 2rem;
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

export const ContainerRegister = styled.div`
    width: 450px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;

    >p{
        font-size: 1em;
        font-family: Arial, Helvetica, sans-serif;
        
        display: flex;
        justify-content: center;

        margin-top: 30px;
        margin-bottom: 20px;
    }

    >hr{
        margin-bottom: 20px;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;

        >p{
            width: 90%;
            margin: auto;
        }
    }

    
`

export const ContainerButton = styled.div`
    width: 150px;
    height: 40px;

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
        transition: 0.6s;
    }

    > button:hover{
        transform: scale(1.2);
        transition: 0.5s;
    }
`
