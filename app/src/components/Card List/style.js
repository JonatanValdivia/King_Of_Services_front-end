import styled from "styled-components"

export const CardList = styled.div`
    width: 700px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    padding: 20px;


    border-radius: 20px;

    box-shadow: 0px 0px 10px 5px #e6e6e6;

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

    >button{
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

        margin-left: 260px;
        margin-top: -20px;
    }

    
`

export const Profile = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background-color: orange;
    float: left;
`

export const EstrelaStyle = styled.div`
    width: 100px;
    height: 20px;
    float: left;
    margin-left: 40px;

    >img{
        width: 20px;
        height: inherit;
    }
`

export const ContainerButton = styled.div`
    width: 150px;
    height: 40px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 35px;

    
`