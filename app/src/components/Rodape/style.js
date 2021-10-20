import styled from "styled-components";


export const FooterStyle = styled.footer`
    position: absolute;
    bottom: auto;
    left: 0;
    width: 100%;
    height: 400px;
    background-color: #121212;
    margin-top: 100px;
`

export const LogoStyle = styled.div`
    width: 300px;
    height: 80px;
    background-color: blanchedalmond;

    /* @import url('https://fonts.googleapis.com/css2?family=Corben:wght@700&display=swap'); */
    @import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');

    h1{
        color: var(--primary);
        font-family: 'Corben', cursive;
    }

    p{
        color: var(--primary);
        font-family: 'Festive', Cursive;
        font-size: 50px;
    }
`