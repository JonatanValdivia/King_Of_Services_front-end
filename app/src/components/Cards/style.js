import styled from "styled-components";

export const ContainerCards = styled.div`
    width: 70%;
    height: 450px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;

    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const SectionCards = styled.div`
    width: 80%;
    height: 80%;
    padding-top: 15px;
    padding-left: 20px;
`

export const CardServices = styled.div`
    width: 270px;
    height: 330px;
    background-color: white;
    float: left;
    margin-left: 50px;

    border-radius: 5%;
    box-shadow: 5px 5px 10px 0px #adadad;

    cursor: pointer;

    :hover{
        box-shadow: 10px 10px 10px 0px #adadad;
    }
`

export const ContainerImg = styled.div`
    width: 270px;
    height: 55%;
    border-radius: 5%;

    >img{
        width: inherit;
        height: 100%;
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

    >h5{
        font-family: sans-serif;
    }

    >p{
        color: #FF7A00;
        font-size: 0.9em;
        margin-top: 30px;
        font-weight: bold;
    }
`

export const TittleServices = styled.div`
    width: 600px;
    height: 80px;
    padding: 20px;

    margin-left: auto;
    margin-right: auto;

    >h1{
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

    >p{
        font-family: sans-serif;
        font-size: 1.1em;
        color: #FFFFFF;

        margin-top: 10px;

        display: flex;
        justify-content: center;
    }
`