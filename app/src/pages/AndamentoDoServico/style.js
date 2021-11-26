import styled from "styled-components";

export const Content = styled.div`
    padding-top: 30px;
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

`

export const Overlay = styled.div`
    width: 50%;
    height: 50%;
    margin-top: 70px;

    border: 1px solid #e3e1e1;

    tr{
        width: 100%;
        height: 5vh;

        display: flex;
        justify-content: center;
        align-items: center;

        td{
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

    @media (min-width: 801px) and (max-width: 1300px){
        width: 70%;
    }

    @media only screen and (max-width: 800px){
        width: 100%;

        tr{

            td{
                float: none;

            }
        }
    }
`