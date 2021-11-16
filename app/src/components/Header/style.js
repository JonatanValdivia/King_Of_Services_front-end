import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: auto;
    position: fixed;
    padding: 0px 0 10px 0;
    top: 0;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: flex-end;

    i{
        display: none;
    }

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
    
    @media only screen and (max-width: 800px){
        width: 100vw;
        border: 0px;
        margin-right: 0px;
        font-size: 1.5rem;
        
        .closeRegister{
            display: none;
        }
        
    }
    
    :hover{
        transform: scale(0.9);
        transition: 0.3s;
        color: var(--primary);
    }
`