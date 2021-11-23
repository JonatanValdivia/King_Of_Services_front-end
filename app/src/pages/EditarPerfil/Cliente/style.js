import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;

  @media(min-width: 320px) and (max-width: 890px){
    width: 100%;
    border-right: none;

  }

`

export const StyleComponent = styled.div`
  margin-top: 4rem;
  width: 65%;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  float: left;
  margin-top: 76px;
  border: solid 1px #CCC;

  >input[type='file'] {
        display: none
    }

    > label{
        width: auto;
        height: inherit;
        background-color: var(--primary);
        color: white;
        padding: 1rem;
        cursor: pointer;
        border: none;
        font-size: 1em;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 20px;
        margin-top: 10px;
        margin-bottom: 20px;
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

`

export const Button = styled.div`
  width: auto;
  height: auto;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;

  button{
    width: 200px;
    height: 40px;
    background-color: var(--primary);
    color: white;
    cursor: pointer;
    border: none;
    font-size: 1em;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 20px;
  }

  @media(min-width: 320px) and (max-width: 890px){
    width: auto;
  }

`

export const Inputs = styled.div`
    width: 400px;
    height: auto;
    padding-top: 50px;
    z-index: 5;
    display: flex;
    justify-content: center;
    padding-left: 30px;

    > form > input{
        width: 400px;
        height: 50px;
        border: solid 1px var(--primary);
        
        margin-bottom: 30px;
        padding-left: 20px;
    }

    >form input:first-child {
        margin-bottom: 2rem;
    }

    >form>div{
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        padding-top: 1rem;
    }

    >form>div>input[type='radio'] {
        margin-left: 1rem;
    }

    > form > textarea{
        width: 400px;
        height: 150px;
        border: solid 1px var(--primary);
        
        padding: 10px;
        margin-bottom: 30px;
        font-family: sans-serif;
    }

    @media(min-width: 320px) and (max-width: 890px){
        padding: 0px;
        width: 90%;

        >form{
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        > form > input{
            width: 100%;
        }

        >form>div{
            width: 100%;
            justify-content: space-around;
        }

        > form > textarea{
            width: 100%;
        }
    }
`