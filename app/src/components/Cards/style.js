import styled from "styled-components";

export const ContainerCards = styled.div`

    width: 70%;
    height: auto;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    /* flex-direction: row; */

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
    }
`

export const SectionCards = styled.div`
    width: auto;
    height: 80%;
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        display: flex;
        flex-direction: column;
        /* flex-wrap: nowrap; */
        align-items: center;
        justify-content: center;
        padding-left: 0px;
    }
`

export const CardServices = styled.div`
    width: 270px;
    height: 330px;
    background-color: white;
    float: left;
    margin: 10px;
    /* margin-right: 50px; */
    border-radius: 5%;
    box-shadow: 5px 5px 10px 0px #adadad;

    cursor: pointer;

    :hover{
        box-shadow: 10px 10px 10px 0px #adadad;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 320px;
        height: 330px;
        margin-left: 0px;
        margin-bottom: 30px;
        float: none;
        margin-left: 0px;
    }
`

export const ContainerImg = styled.div`
    width: 270px;
    height: 55%;
    border-radius: 5%;

    img{
        width: inherit;
        height: 100%;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
    }
`

export const Services = styled.div`
    width: 270px;
    height: 45%;
    border-radius: 5%;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    h5{
        font-family: sans-serif;
    }

    p{
        color: #FF7A00;
        font-size: 0.9em;
        margin-top: 30px;
        font-weight: bold;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;

        p{
            font-size: 1.4em;
        }
    }
`

export const TittleServices = styled.div`
    width: 600px;
    height: 80px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    h1{
        font-family: sans-serif;
        font-size: 2em;
        color: #000000;

        display: flex;
        justify-content: center;
        
        >span{
            color: #FF7A00;
            margin-left: 10px;
        }
    }

    p{
        font-family: sans-serif;
        font-size: 1.1em;
        color: #FFFFFF;

        margin-top: 10px;

        display: flex;
        justify-content: center;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: auto;
        height: auto;

        h1{
            font-size: 1.5em;
            
            >span{
                display: none;
            }
        }
    }
`