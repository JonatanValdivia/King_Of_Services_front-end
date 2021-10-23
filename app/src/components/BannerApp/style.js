import styled from "styled-components";

export const BannerApp = styled.div`
    width: inherit;
    height: 500px;
    background-color: #ff9900;
    margin-top: 100px;

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        height: auto;
    }
`

export const ContainerApp = styled.div`
    width: 1100px;
    height: inherit;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        flex-direction: column;
        height: auto;
    }
`

export const ComponentsApp = styled.div`
    width: 35vw;
    height: 500px;
    float: left;
    padding: 60px;

    >h1{
        font-family: sans-serif;
        font-size: 2em;
        color: white;

        >span{
            color: black;
        }
    }

    >p{
        font-family: sans-serif;
        font-size: 1.3em;
        margin-top: 30px;
        color: white;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        height: auto;
        padding: 30px;
    }
`

export const ContainerMobile = styled.div`
    width: 30vw;
    height: inherit;
    position: relative;
    top: -70px;

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        height: auto;
        top: 0px;

        >img{
            width: 100%;
        }
    }
`

export const PlayStore = styled.div`
    width: 200px;
    height: 60px;
    
    margin-top: 50px;

    padding: 12px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px;

    background-color: white;
    color: black;

    >p{
        margin-left: 40px;
    }

    >h1{
        font-size: 1em;
        margin-left: 40px;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        height: auto;

        >p{
            margin-left: 10px;
        }
    }
`

export const PlayStoreImg = styled.div`
    width: 30px;
    height: 30px;

    margin-top: -35px;

    >img{
        width: inherit;
        height: inherit;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        height: auto;
        margin-top: 0px;
    }    
`