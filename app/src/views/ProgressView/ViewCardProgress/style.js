import styled from "styled-components"

export const ContentCard = styled.div`
    width: 100%;
    height: auto;

    padding: 15px;

    img{
        width: 100px;
        height: 100px;
        border-radius: 100%;
    }

    @media only screen and (max-width: 500px){ 
        img{
            margin: auto;
        }
    }

`

export const CardProgressStyle = styled.div`
    width: 100%;
    height: 30%;

    margin-top: 10px;
    padding: 20px;

    border-radius: 15px;
    box-shadow: 0px 0px 5px 0px #999999;

    >p{
        margin-left: 190px;
        font-size: 1.5em;
        letter-spacing: 2px;
    }

    #description{
        font-size: 1em;
        font-family: sans-serif;
        padding: 10px;
        padding-left: 0;
    }

    @media only screen and (max-width: 600px){ 
        display: flex;
        flex-direction: column;
        align-items: center;

        >p{
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 0px;
            font-size: 1.5em;
            letter-spacing: 2px;
        }

        #description{
            font-size: 1em;
            font-family: sans-serif;
            padding: 10px;
            padding-left: 0;
        }
    }

    @media (min-width: 601px){ 
        >p{
            margin-left: 190px;
            font-size: 1.5em;
            letter-spacing: 2px;
        }
    }
`

export const ButtonProgress = styled.div`
    width: max-content;
    height: auto;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-left: auto;

    p{
        color: var(--primary);
        font-weight: bold;
    }

    button{
        width: 100px;
        height: 40px;

        background-color: green;
        color: white;
        cursor: pointer;
        border: none;

        font-size: 1em;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;

        border-radius: 20px;
    }
`;
