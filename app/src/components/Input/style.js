import styled from "styled-components";

export const Container = styled.div`
    width: 700px;
    height: 50px;
    margin-top: 40px;
    margin-left: 20px;

    >input{
        width: 600px;
        height: 50px;
        border: 0;
        padding-left: 10px;
        border-radius: 3px;
        box-shadow: 5px 5px 10px 0px;

        font-family: sans-serif;
    }

    > input:not(:placeholder-shown),
    > input:focus{
        font-size: 15px;
        color: var(--primary);
        top: -25px;
        left: 0;
    }

    >button{
        width: 100px;
        height: 53px;
        background-color: orange;

        border: 0px;
        color: #FFFFFF;
        border-radius: 3px;
        cursor: pointer;

        :hover{
            box-shadow: 0px 0px 5px 0px #757575;
        }
    }

    @media only screen and (max-width: 400px){
        width: 100%;
        height: auto;
        margin-top: 40px;
        margin-left: 0;

        >input{
            width: 100%;
            height: 50px;
        }

        >button{
            margin-top: 1rem;
            width: 60%;
            height: 40px;
        }
    }
`