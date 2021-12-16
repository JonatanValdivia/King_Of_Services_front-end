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
    padding-bottom: 0px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 0px #000000;
    background-color: #a3a3a3;

    >p{
        margin-left: 190px;
        font-size: 1.5em;
        letter-spacing: 2px;
        position: relative;
        top: -10px;
    }
    
    >span{
        margin-left: 190px;
    }

    #description{
        height: 80px;
        font-size: 1em;
        font-family: sans-serif;
        padding-left: 0;
        overflow: auto;
    }

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

    @media only screen and (max-width: 600px){ 
        display: flex;
        flex-direction: column;
        align-items: center;

        >p{
            margin-top: 10px;
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

    div:last-child{
        display: flex;
        justify-content: end;
        position: relative;
        top: -20px;

        button{
            width: max-content;
            padding: 0px 20px;
            height: 40px;
            background-color: var(--primary);
            color: white;
            cursor: pointer;
            border: none;
            font-size: 1em;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 20px;
            margin-top: 30px;
        }

    }
    
    
`

export const ButtonProgress = styled.div`
    width: 100px;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    position: relative;
    top: -10px;
    gap: 5px;

`