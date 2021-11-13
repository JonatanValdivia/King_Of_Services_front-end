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
    align-items: flex-end;
    /* justify-content: space-between; */

    a>img{
        width: 150px;
        margin-left: 50px;
        margin-top: 10px;
    }

    @media only screen and (max-width: 800px){
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
                
                > li{
                    width: 100%;
                    height: auto;
                    text-align: center;
                    font-size: 1.5rem;

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
    margin-top: 10px;
    padding-left: 10px;
    
    transition: 0.3s;

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

export const Profile = styled.div`
    width: 40px;
    height: 40px;
    background-color: blueviolet;
    border-radius: 100%;
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
    height: 100px;
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
        position: static;
        visibility: visible;
        width: 100%;

        ul{
            width: 100%;

            >li{
                align-items: flex-start;
                margin-bottom: 10px;
            }
            
            hr{
                display: none;
            }
        }
    }
`