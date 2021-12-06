import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    z-index: 99999;
    background-color: var(--secundary);
    display: flex;
    align-items: center;
    justify-content: center;

    i{
        display: none;
    }

    a>img{
        width: 150px;
        margin-left: 50px;
        margin-top: 10px;
    }

    @media only screen and (max-width: 800px){
        height: auto;
        align-items: flex-end;
        padding: 0px 0 10px 0;

        .open{
            display: flex;
            height: 100vh;   
        }

        i{
            display: flex;
            padding-top: 10px;
            padding-right: 15px;
            color: white;
            font-size: 40px;
        }    

        nav{
            display: none;
        }

        width: 100%;
        flex-direction: column;
        margin: auto;
        
        a>img{
            display: none;
        }
    }
`;

export const Menu = styled.nav`
    width: 90%;
    margin-left: auto;
    margin-right: auto;

        > ul {
            width: 100%;
            height: inherit;
            display: flex;
            justify-content: end;
            gap: 30px;

            >li{
                float: left;
                width: max-content;
                height: inherit;
                list-style: none;
                color: #FFFFFF;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                margin-top: 20px;

                a:hover {
                    color: var(--primary);
                    font-weight: normal;
                }
            }
        }
        
        @media only screen and (max-width: 800px){
            width: 100%;
            margin-left: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            > ul {
                flex-direction: column;
                justify-content: center;
                height: 100%;
                gap: 10px;
                
                > li{
                    width: 100%;
                    height: auto;
                    text-align: center;
                    font-size: 1.5rem;
                    margin-top: -5px;

                    > a{
                        transition: 0.9s
                    }
                }
            }
        }
`;

export const TextRegister = styled.div`
    width: 170px;
    height: 50px;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
    padding-left: 10px;
    transition: 0.3s;

    img{
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }

    @media only screen and (max-width: 800px){
        border: 0px;
        margin-right: 0px;
        font-size: 1.5rem;
        display: none;
        
    }

    p{
        margin-left: 10px;
    }
`

export const ContentIcon = styled.div`
    width: auto;
    height: auto;
    margin-right: 5px;
    display: flex;
    align-items: center;
`

export const Submenu = styled.div`
    width: 170px;
    height: auto;
    background-color: var(--secundary);
    position: absolute;
    visibility: hidden;

    ul>li{
        width: 100%;
        height: 50px;
        list-style: none;
        color: #FFFFFF;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 800px){
        height: auto;
        position: static;
        visibility: visible;
        width: 100%;

        ul{
            width: 100%;

            >li{
                align-items: flex-start;
            }
            
            hr{
                display: none;
            }
        }
    }
`