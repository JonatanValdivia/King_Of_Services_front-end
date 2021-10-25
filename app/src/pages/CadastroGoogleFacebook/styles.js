import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: auto;

    align-items: center;
    display: flex;
    justify-content: center;

    margin-top: 10%;

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
    }
`;

export const FormContainer = styled.form`
    width: 500px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 50px;

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
        border-radius: 40px;

        margin-left: auto;
        margin-right: auto;
        /* margin-bottom: 20px; */
        margin-top: 10px;
    }

    #facebook{
        background-color: #2c6bd1;
        margin-top: 30px;
    }

    #Google{
        border: solid 1px black;
        background-color: transparent;
        margin-top: 10px;
        color: black;
    }

    >hr{
        margin-top: 10px;
        margin-bottom: 10px;
    }

    >form>input{
        width: 400px;
        height: 50px;

        border: none;
        border-radius: 40px;
        box-shadow: 0px 0px 5px 0px;

        margin-top: 10px;
        padding-left: 30px;

        font-family: sans-serif;
        font-size: 15px;
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

    >img{
        width: 50px;
        height: 70px;
        margin-left: auto;
        margin-right: auto;
    }

    >h1{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 2em;
        color: var(--primary);

        display: flex;
        justify-content: center;
        
        margin-top: -10px;
    }

    >p{
        font-size: 1em;
        font-family: Arial, Helvetica, sans-serif;
        
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        gap: 0px;
        padding: 0px;
        align-items: center;

        >button{
            width: 35%;
        }

        >form{
            width: 90%;
        }

        >form>div{
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            padding-top: 1rem;
        }

        >form>input{
            width: 100%;
            height: 50px;

            border: none;
            border-radius: 40px;
            box-shadow: 0px 0px 5px 0px;

            margin-top: 10px;
            padding-left: 30px;

            font-family: sans-serif;
            font-size: 15px;
        }

        >form>div>input[type='radio'] {
            margin-left: 0rem;
        }

        >img{
            width: 50px;
            height: 70px;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;