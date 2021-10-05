import styled from "styled-components";
import ImgBanner from "../../assets/image.jpg"

export const BannerCadastroStyle = styled.div`
    width: inherit;
    height: 700px;
    background: url( ${ImgBanner} ) center no-repeat;
    background-size: cover;
    padding: 150px;

`

export const Overlay = styled.div`
    width: 720px;
    height: 400px;
    margin-left: 770px;

`

export const Tittle = styled.div`
    width: inherit;
    height: 200px;

    margin-left: auto;
    margin-bottom: 20px;

    color: white;
    padding: 20px;

    >h1{
        text-transform: uppercase;
    }

    >p{
        font-family: sans-serif;
        margin-top: 20px;
        font-weight: bold;
    }

    #textAperence{
        color: black;
    }
`

export const ModalApp = styled.div`
    width: 300px;
    height: 170px;
    background-color: white;
    margin-left: 50px;

    border-radius: 50px;
    padding: 20px;
    
    >h3{
        font-family: sans-serif;
        color: black;

        margin-left: auto;
        margin-right: auto;
    }

    >p{
        font-family: sans-serif;
        color: black;
        margin-top: 5px;
        font-weight: bold;
    }

    .textAperenceApp{
        color: var(--primary);
    }
`

export const PlayStore = styled.div`
    width: 200px;
    height: 60px;
    
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;

    padding: 12px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px;

    color: black;

    >p{
        margin-left: 40px;
    }

    >h1{
        font-size: 1em;
        margin-left: 40px;
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
`