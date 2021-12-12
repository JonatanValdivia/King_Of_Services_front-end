import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  display: block;
  padding: 10px 10px 0px 10px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin-top: 30px;
  
  #foto_nome{
    display: flex;
    >img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    h2{
      padding-left: 20px;
    }
  }

  >p{
    width: 70%;
    padding: 1rem;
  }

`;

export const Estrelas =  styled.div`
  >img{
    width: 40px;
    height: 40px;
  }

  >p{
    margin-top: 0.5rem;
    margin-left: 6.5rem;
  }
`;

export const Dados = styled.div`
  padding: 1rem;
  
  div:first-child{

    img{
      width: 200px;
      height: 200px;
    }
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