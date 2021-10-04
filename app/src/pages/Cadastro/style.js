import styled from "styled-components";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.form`
    width: 600px;
    height: 500px;
    /* padding: 300px; */
    /* display: flex;
    flex-direction: column;
    gap: 15px; */

    box-shadow: 0px 0px 20px #00000055;

    > h1 {
        text-align: center;
    }

    #hr{
        width: 80%;
        margin-right: auto;
        margin-left: auto;

        >hr{
            border-width: 0; 
            height: 1px;
            border-top-width: 1px;
        }
    }
`;

export const Tittle = styled.div`
    width: 400px;
    height: 50px;
    background-color: violet;

    margin-left: auto;
    margin-right: auto;

    >h1{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 2.5em;
        color: var(--primary);

        display: flex;
        justify-content: center;
    }
    
`

export const Logo = styled.div`
    width: 70px;
    height: 70px;
    background-color: turquoise;

    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
`