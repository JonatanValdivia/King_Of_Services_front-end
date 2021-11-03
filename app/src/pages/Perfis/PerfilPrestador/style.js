import styled from "styled-components";

export const Content = styled.div`
    width: 65%;
    height: auto;
    
    margin-left: auto;
    margin-right: auto;

    border: solid 1px black;
`


export const Overlay = styled.div`
  width: auto;
  height: auto;
  display: flex;

  @media(min-width: 320px) and (max-width: 890px){
    flex-direction: column;
  }
`;

export const StyleComponent1 = styled.div`
  margin-top: 4rem;
  width: 30%;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: solid 1px #CCC;

    div{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      >p{
        margin-top: 3rem;
      }
    }
  

  @media(min-width: 320px) and (max-width: 890px){
    width: 100%;
    border-right: none;

    div{
      >p:last-child{
        order: -1;
        font-size: 2rem;
      }
    }
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

export const StyleComponent2 = styled.div`
  margin-top: 4rem;
  width: 70%;
  height: auto;

  @media(min-width: 320px) and (max-width: 890px){
    width: 100%;
    margin-top: 0rem;
  }
`;

export const Dados = styled.div`
  padding: 3rem;
  margin-bottom: 2rem;

  >h1{
    margin-bottom: 1rem;
  }

  >h2{
    margin-bottom: 1rem;
  }

  >p{
    width: 70%;
    padding-top: 10px;
  }

  @media(min-width: 320px) and (max-width: 890px){
    width: 100%;
    padding: 1rem;

    >p{
      width: 100%;
      padding: 1rem;
    }

  }
`;

export const Estrelas =  styled.div`
  width: max-content;
  padding: 1rem;
  
  >img{
    width: 30px;
    height: 30px;
  }

  >p{
    margin-top: 0.5rem;
    margin-left: 6.5rem;
  }
`;

export const Habilidades = styled.div`
  padding: 1rem;

  >h3{
    margin-left: 2rem;
    margin-bottom: 1.5rem;
  }

  >div{
    width: 30%;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;

    >p{
      color: white;
      width: 8vw;
      text-align: center;
      background-color: var(--primary);
      padding: 0.4rem;
      margin-bottom: 1rem;
      border-radius: 2vw;
    }
  }

  @media(min-width: 320px) and (max-width: 890px){
    padding: 0rem;
    margin-bottom: 0rem;

    >div{
      width: 100%;
      grid-template-columns: auto auto;
      justify-content: space-around;

      >p{
        width: 100px;
        color: white;
        text-align: center;
        background-color: var(--primary);
        padding: 0.4rem;
        margin-bottom: 1rem;
        border-radius: 2vw;
      }
    }
  }
`;

export const Album = styled.div`
  padding: 2rem;

  h1{

  }

  div{
    width: 50%;
    display: grid;
    grid-template-columns: auto auto auto;
    
    >img{
      width: 12vw;
      height: 18vh;
      margin: 1rem;
    }
  }

  @media(min-width: 320px) and (max-width: 890px){
    padding: 0.5rem;

    h1{
      margin-left: 0.5rem;
    }

    div{
      width: 100%;
      display: grid;
      justify-content: center;
      grid-template-columns: auto auto;
    
      >img{
        width: 40vw;
        height: 25vh;
        margin: 0.4rem;
      }
    }
  }
`;

