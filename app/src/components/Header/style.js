import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    height: 70px;
    position: fixed;
    top: 0;

    background-color: var(--secundary);

    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    > img{
        width: 120px;
        margin-left: 50px;
    }
    
`;

export const Menu = styled.nav`
    width: 35%;
    height: 70px;
    /* margin: 0 auto; */
    margin-left: 850px;

    >ul {
        width: 100%;
        height: inherit;

        display: flex;
        justify-content: center;    

        >li{
            width: 150px;
            height: inherit;
            float: left;
            list-style: none;
            color: #FFFFFF;

            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            :hover{
                color: #FF7A00;
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

    :hover{
        color: #FF7A00;
    }
`