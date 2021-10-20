import styled from "styled-components";
import ImgBanner from "../../assets/servicosgerais.png"

export const BannerStyle = styled.article`
    width: inherit;
    height: 570px;
    background: url( ${ImgBanner} ) center no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;

    @media only screen and (max-width: 400px){
        width: 100%;
        padding: 0px;
    }
`

export const Title = styled.div`
    width: 600px;
    height: 110px;
    padding: 20px;

    margin-left: auto;
    margin-right: auto;


    >h1{
        font-family: sans-serif;
        font-size: 2em;
        color: #FFFFFF;

        display: flex;
        justify-content: center;
    }

    >p{
        font-family: sans-serif;
        font-size: 1.1em;
        color: #FFFFFF;

        margin-top: 10px;

        display: flex;
        justify-content: center;
    }

    @media only screen and (max-width: 400px){
        
    }

` 