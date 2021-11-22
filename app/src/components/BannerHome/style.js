import styled from "styled-components";
import ImgBanner from "../../assets/banner.png"

export const BannerStyle = styled.article`
    width: inherit;
    height: auto;
    background: url( ${ImgBanner} ) center no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px;

    margin-top: -10px;

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        height: 600px;
        padding: 0px;
        gap: 5rem
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

    @media(min-width: 320px) and (max-width: 890px){
    
    }

` 