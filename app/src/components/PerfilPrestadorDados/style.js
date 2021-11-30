import styled from "styled-components";

export const StyleComponent1 = styled.div`
  margin-top: 4rem;
  width: 30%;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: solid 1px black;
  border-bottom: solid 1px black;

  @keyframes back-go{
    0% {transform: translateX(1000px);}
    1000% {transform: translateX(0);}
  }

  .modal{
    width: 100vw;
    height: 100vh;
    background-color: #00000090;
    position: fixed;
    top:0px;
    left: 0px;
    z-index: -10;
    opacity: 0;
    user-select: none;
    transition: opacity 0.5s;
}

.modal.active{
  opacity: 1;
  z-index: 5000;
}

.modal__content {
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80vw;
  margin: 15vh auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 2px black;

  @media(min-width: 320px) and (max-width: 450px){
    width: 100vw;
  }

}

.modal__header {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #DDDDDD;
  border-radius: 5px 5px 0 0;
  
}

.modal__header>span {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: lightslategray;
}

.modal__header>h1{
  margin: 0 auto;
  color: black;
  font-weight: normal;
  text-shadow: 0px 0px 1px grey;
  text-transform: uppercase;
  font-size: 1.2rem;

  @media(min-width: 320px) and (max-width: 890px){
    font-size: 1rem;
    padding: 10px;
  
  }
}

.modal__header>span:hover{
  background-color: #ff4949;
  cursor: pointer;
  color: white;
  border-radius: 0 5px 0 0;
}

.modal__main {
  width: 80%;
  padding: 0 0px;

  >form{
    width: 100%;
  }

  >form>textarea{
    width: 100%;
    height: 300px;
    font-size: 1.3rem;
    padding: 5px;
  }

}

.modal__footer {
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #DDDDDD;
  border-radius: 0 0 5px 5px;
  padding: 5px 20px;
  background-color: inherit;

  >button{
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width:1024px) {
  .modal__main form input {
      width: 100%;
  }
  .modal__footer {
      text-align: center;
  }
}

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    >p{
      margin-top: 3rem;
    }
  }

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
    margin-top: 50px;
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
  border-bottom: solid 1px black;
  margin-bottom: 2rem;

  >h1{
    margin-bottom: 1rem;
  }

  >h2{
    margin-bottom: 1rem;
  }

  >p{
    width: 70%;
    padding: 1rem;
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
  margin-bottom: 5rem;

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

