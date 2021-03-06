import styled from "styled-components";


export const FooterStyle = styled.footer`
    position: absolute;
    bottom: auto;
    left: 0;
    width: 100%;
    height: auto;
    background-color: #121212;
    margin-top: 100px;
    padding: 60px 60px 60px 60px;

    >div:first-child{
        display: grid;
        grid-template-columns: 40% 15% 25% 20%;
        margin-bottom: 100px;

        >div:not(div:first-child){
            margin-top: 6rem;
            color: white;
            
        }
    }

    @media(min-width: 320px) and (max-width: 770px){
        padding: 20px;

        >div:first-child{
            display: flex;
            flex-direction: column;
            margin-bottom: 0px;

            >div:not(div:first-child){
                margin-top: 0px;
                text-align: center;
                padding: 10px 0px 10px 0px;

            }
        }
    }
`

export const LogoStyle = styled.div`
    width: auto;
    height: 4rem;

    /* @import url('https://fonts.googleapis.com/css2?family=Corben:wght@700&display=swap'); */
    @import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');

    h1{
        color: var(--primary);
        font-family: 'Corben', cursive;
        font-size: 3rem;
    }

    p{
        color: var(--primary);
        font-family: 'Festive', Cursive;
        font-size: 50px;
    }

    @media(min-width: 320px) and (max-width: 770px){
        h1{
            color: var(--primary);
            font-family: 'Corben', cursive;
            font-size: 2.1rem;
            text-align: center;
        }
    }
`

export const Inicio = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    >p:first-child{
        font-size: 2rem;
        font-weight: bold;
    }

    p:not(p:first-child){
        a:hover{
            color: var(--primary);
            cursor: pointer;
        }
    }

    >p{
        margin-bottom: 1.2rem;
        height: auto;
        width: max-content;
    }

    @media(min-width: 320px) and (max-width: 770px){
        align-items: center;

        >p:first-child{
            font-size: 2.6rem;
            font-weight: bold;
        }

        >p{
            font-size: 1.6rem;
            line-height: 1.5rem;
            margin-top: 1rem;
        }
    }
`;

export const SobreNos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p:first-child{
        font-size: 2rem;
        font-weight: bold;
    }

    p:not(p:first-child){
        a:hover{
            color: var(--primary);
            cursor: pointer;
        }
    }

    >p{
        margin-bottom: 1.2rem;
        height: auto;
        width: max-content;
    }

    @media(min-width: 320px) and (max-width: 770px){

        >p:first-child{
            font-size: 2.6rem;
            font-weight: bold;
        }

        >p{
            font-size: 1.6rem;
            margin-top: 1rem;
        }
    }
`;

export const Contatos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >div:first-child{
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    >div>a>i{
        font-size: 3rem;

        :hover{
            cursor: pointer;
            color: var(--primary);
        }
    }

    >div:last-child{
        margin-top: 10px;
        text-align: center;
        padding: 5px;
        width: 60%;
        height: 5vh;
        border-radius: 30px;
        background-color: var(--primary);
        transition: 0.5s;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;

        :hover{
            background-color: white;
            color: var(--primary);
            width: 65%;
            transition: 0.5s;
            font-weight: bold;
        }
    }

    @media(min-width: 320px) and (max-width: 770px){
        margin-bottom: 40px;
        
        >div{
            margin: 30px;
        }

        >div:first-child{
            margin-bottom: 20px;
        }

        >div:last-child{
            width: max-content;
            padding: 10px;
            font-size: 2rem;
        }
    }

`;

export const Copyright = styled.div`
    width: inherit;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding-bottom: 10px;

    >hr{
        width: 100%;
        background-color: gray;
        margin-bottom: 20px;
    }
`;