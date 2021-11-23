import styled from "styled-components";

export const BannerStyle = styled.div`
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secundary);

    @media(min-width: 320px) and (max-width: 890px){
        margin-top: 100px;
        width: auto;
        padding: 0px;
    }

    h2{
        color: #FFFFFF;

        span{
            color: var(--primary);
        }
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

