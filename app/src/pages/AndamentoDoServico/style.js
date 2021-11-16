import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 800px){
        
    }

`

export const Overlay = styled.div`
    width: 40%;
    height: 50%;
    margin-top: 70px;

    border: 1px solid #e3e1e1;

    ul{
        width: 100%;
        height: 5vh;

        display: flex;
        justify-content: center;
        align-items: center;

        li{
            width: 33%;
            height: 100%;
            float: left;

            list-style: none;
            cursor: pointer;


            display: flex;
            justify-content: center;
            align-items: center;

            :hover{
                color: var(--primary);
            }
        }
    }

    hr{
        width: 90%;

        margin-left: auto;
        margin-right: auto;
    }

    @media only screen and (max-width: 800px){
        width: 100%;

        ul{

            li{
                float: none;

            }
        }
    }
`