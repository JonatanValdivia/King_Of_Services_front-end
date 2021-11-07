import styled from "styled-components";

export const Content = styled.div`
  margin-top: 3rem;
  width: 80%;
  height: auto;
  
  margin-left: auto;
  margin-right: auto;

  /* border: solid 1px black; */

  @media(min-width: 320px) and (max-width: 890px){
    width: 100%;
    border: none;
  }
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
  /* border-right: solid 1px #CCC; */

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

export const StyleComponent2 = styled.div`
  margin-top: 4rem;
  width: 70%;
  height: auto;

  #dados{
    display: flex;
    justify-content: space-between;
    align-items: center;
    >p{
      display: flex;
      margin-top: 2rem;
      margin-bottom: 2rem;
      align-items: center;

      i{
        font-size: 3rem;
        padding-right: 8px;
      }
    }

    #whatsapp{
      i{
        color: #2fff00;
      }
    }

    p:last-child{
      i{
        color: blue; margin-left: 2px;
      }
    }

  }

  #datas{
    display: flex;
    justify-content: space-between;
    >p{
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  #descricao{
    h3{
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

  }

  @media(min-width: 320px) and (max-width: 890px){
    width: 100%;
    margin-top: 0rem;

    >h1{
      text-align: center;
      margin-bottom: 2rem;
    }

    #dados{
      justify-content: center;
      flex-direction: column;
      
      >p{
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    }

    #datas{
      flex-direction: column;

      >p{
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
      }
    }

    #descricao{
      h3{
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding-left: 10px;
      }

      p{
        padding: 0px 10px 0px 10px
      }
    }
  }
`;


