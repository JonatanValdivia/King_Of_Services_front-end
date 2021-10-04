import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: violet;
`;

export const FormContainer = styled.form`
    width: 600px;
    height: 500px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    box-shadow: 0px 0px 20px #00000055;

    > h1 {
        text-align: center;
    }

    >button{
        width: 300px;
        height: 50px;
        background-color: var(--primary);
        color: white;
        border: 0px;
        font-weight: bold;
        font-size: 1em;
    }
`;