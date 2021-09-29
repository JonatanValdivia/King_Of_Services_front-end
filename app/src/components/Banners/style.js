import styled from "styled-components";
import ImgBanner from "../../assets/servicosgerais.png"

export const BannerStyle = styled.article`
    width: inherit;
    height: 570px;
    background: url( ${ImgBanner} ) center no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: row;
    align-items: center;
    
`

export const ContainerApp = styled.div`
    width: inherit;
    height: 570px;
    background-color: #FF7A00;
    margin-top: 70px;
`

export const App = styled.div`
    width: 70%;
    height: 500px;
    background-color: lavender;
`