import styled from "styled-components";

export const Overlay = styled.div`
    width: 800px;
    height: 200px;

    margin-left: auto;
    margin-right: auto;

`;

export const Title = styled.div`
    width: 600px;
    height: 110px;
    margin-top: -50px;
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

` 

export const ModalContainer = styled.section`
    width: inherit;
    height: inherit;
    padding: 20px;

    background-color: #FFFFFF;
    /* box-shadow: 0px 0px 10px black; */
    border-radius: 10px;

`

export const ContainerUl = styled.nav`
    width: 750px;
    height: 30px;

    >ul{
        width: 100%;
        height: inherit;

        >li{
            width: 150px;
            height: 30px;

            float: left;
            list-style: none;
            color: #313131;

            font-size: 0.8em;

            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            >img{
                width: 20px;
                height: 20px;
                float: left;
            }

            :hover{
                color: #FF7A00;
            }
        }
    }
`