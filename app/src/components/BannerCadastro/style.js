import styled from "styled-components";
import ImgBanner from "../../assets/image.jpg"

export const BannerCadastroStyle = styled.div`
    width: 100%;
    height: 700px;
    background: url( ${ImgBanner} ) center no-repeat;
    background-size: cover;
    padding: 150px;

    @media(min-width: 320px) and (max-width: 890px){
        /* padding: 8rem; */
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

export const Overlay = styled.div`
    width: 720px;
    height: 400px;
    float: right;

    @media(min-width: 320px) and (max-width: 700px){
        width: 90vw;
        height: auto;
        float: right;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 2rem;
        
        
    }

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

    @media(max-width: 740px){
        h1{
            font-size: 20px;
        }

        >p{
            font-size: 18px;
        }
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

    @media(max-width: 450px){
        width: 90%;
        height: auto;
        background-color: white;
        margin-left: 0px;
        margin-top: 0rem;
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