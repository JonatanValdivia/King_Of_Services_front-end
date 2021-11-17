import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  background-color: cadetblue;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 70%;
  height: 85vh;
  background-color: aliceblue;
  display: flex;

`

export const StyleComponent = styled.div`
  margin-top: 4rem;
  width: 30%;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-right: solid 1px #CCC; */
  float: left;

  background-color: blue;

  div:last-child{
    padding: 10px;
    border-radius: 90px;
    width: 180px;
    border: 3px var(--primary) solid;
    text-align: center;
    i{
      color: #ad8c05;
    }
    font-size: 2rem;
    margin-top: 3rem;
  }

  button{
    width: 150px;
    height: 40px;
    color: #FFFFFF;
    border: none;
    border-radius: 50px;
    background-color: var(--primary);
    margin-top: 50px;
  }

  @media(min-width: 320px) and (max-width: 890px){
    width: 100%;
    border-right: none;

  }

`;

export const Foto = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 100%;
  border: solid 3px orange;

  >img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

`;

export const StyleComponent1 = styled.div`
  width: 70%;
  height: 85vh;
  background-color: brown;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  input{
    
  }
`