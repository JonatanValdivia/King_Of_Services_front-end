import styled from "styled-components";

export const BannerStyle = styled.div`
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secundary);
    flex-direction: column;
    padding-top: 50px;
    

    @media(min-width: 320px) and (max-width: 890px){
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

export const ContainerFoto = styled.div`
    width: 70%;
    height: 70%;
    background-color: lawngreen;
    
`