import styled from "styled-components";

export const BannerStyle = styled.div`
    width: inherit;
    height: auto;
    padding: 170px;

    @media(min-width: 320px) and (max-width: 890px){
        width: auto;
        padding: 0px;
    }
`

export const Overlay = styled.div`
    width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

    @media(min-width: 320px) and (max-width: 890px){
        margin-top: 130px;
        width: 90vw;
    }
`

