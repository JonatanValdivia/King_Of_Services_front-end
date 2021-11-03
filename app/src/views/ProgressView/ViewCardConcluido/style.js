import styled from "styled-components"

export const ContentCard = styled.div`
    width: 100%;
    height: auto;

    padding: 15px;
`

export const CardProgressStyle = styled.div`
    width: 100%;
    height: 30%;

    margin-top: 10px;
    padding: 20px;

    border-radius: 15px;
    box-shadow: 0px 0px 5px 0px #999999;

    background-color: gray;

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
`

export const ButtonProgress = styled.div`
    width: 100px;
    height: auto;

    display: flex;
    margin-left: auto;

    p{
        color: green;
    }

    button{
        width: 100px;
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