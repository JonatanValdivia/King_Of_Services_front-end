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

// export const Title = styled.div`
//     width: 600px;
//     height: 110px;
//     padding: 20px;

//     margin-left: auto;
//     margin-right: auto;

//     >h1{
//         font-family: sans-serif;
//         font-size: 2em;
//         color: #FFFFFF;

//         display: flex;
//         justify-content: center;
//     }

//     >p{
//         font-family: sans-serif;
//         font-size: 1.1em;
//         color: #FFFFFF;

//         margin-top: 10px;

//         display: flex;
//         justify-content: center;
//     }

// ` 