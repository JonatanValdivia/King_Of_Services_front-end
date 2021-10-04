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