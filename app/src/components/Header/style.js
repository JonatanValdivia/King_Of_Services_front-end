import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: auto;
    position: fixed;
    padding: 0px 0 10px 0;
    top: 0;
    z-index: 99999;
    background-color: var(--secundary);
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    a>img{
        width: 150px;
        margin-left: 50px;
        margin-top: 10px;
    }
    @media only screen and (max-width: 900px){
        flex-direction: column;
        margin: auto;
        position: static;
        
        a>img{
            display: none;
        }
    }
    
`;

export const Menu = styled.nav`
    width: 40%;
    height: auto;
    margin-left: auto;
        > ul {
            width: 100%;
            height: inherit;
            display: flex;
            justify-content: end;
            >li{
                width: 150px;
                height: inherit;
                float: left;
                list-style: none;
                color: #FFFFFF;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                margin-top: 20px;
            }
        }
        @media only screen and (max-width: 900px){
            margin-left: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            > ul {
                flex-direction: column;
                justify-content: center;
                
                > li{
                    width: 100%;
                    text-align: center;
                    margin-top: 1rem;
                    font-size: 1.5rem;

                    > a{
                        transition: 0.9s
                    }
                }
            }
        }
`;

export const TextRegister = styled.div`
    width: 150px;
    height: 40px;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    transition: 0.3s;
    @media only screen and (max-width: 900px){
        border: 0px;
        margin-right: 0px;
        font-size: 1.5rem;
        
    }
    
    :hover{
        transform: scale(0.9);
        transition: 0.3s;
    }
`