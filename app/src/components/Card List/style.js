import styled from "styled-components"

export const CardList = styled.div`
    width: 700px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    padding: 20px;
    padding-bottom: 70px;

    border-radius: 20px;

    box-shadow: 0px 0px 10px 5px #e6e6e6;

    img{
        margin-bottom: 20px;
    }

    p{
        margin-top: 20px;
        margin-left: 190px;
        margin-bottom: 20px;
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

    @media(min-width: 320px) and (max-width: 890px){
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: min-content;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        padding: 0px;
        padding-top: 10px;

        >p{
            margin-left: 0px;
            font-size: 1em;
            letter-spacing: 0px;
            order: 1;
            margin-top: 10px;
        }

        >button{
            width: 35%;
            height: 40px;

            margin-left: 0px;
            margin-top: 10px;
            margin-bottom: 1rem;
            order: 2;
        }

        #description{
            padding: 10px;
            padding-left: 10px;
        }
    }
`

export const Profile = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background-color: orange;
    float: left;

    @media(min-width: 320px) and (max-width: 890px){
        float: none;
    }

    
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

    @media(min-width: 320px) and (max-width: 890px){
        width: auto;
        height: auto;
        float: none;
        margin-left: 0px;
        margin-top: 10px;
    }
`

export const ContainerButton = styled.div`
    width: 150px;
    height: 40px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 35px;

    @media(min-width: 320px) and (max-width: 890px){
        width: auto;
        height: auto;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    
`