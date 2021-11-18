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
`

export const StyleComponent = styled.div`
  margin-top: 4rem;
  width: 65%;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-right: solid 1px #CCC; */
  float: left;
  margin-top: 76px;

  border: solid 1px #CCC;


  button{
    width: 150px;
    height: 40px;
    color: #FFFFFF;
    border: none;
    border-radius: 50px;
    background-color: var(--primary);

    font-size: 1em;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
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

export const ContainerHabilidades = styled.div`
    width: 700px;
    height: 350px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;

    div>p{
        font-weight: bold;
        font-family: sans-serif;
        margin-bottom: 10px;
    }

    div>input{
        width: 250px;
        height: 50px;
        border: solid 1px var(--primary);
        
        margin-bottom: 30px;
        padding-left: 20px;
    }

    #experience{
        width: 150px;
        margin-left: 30px;
    }

    div>button{
        width: 120px;
        height: 40px;

        background-color: var(--primary);
        color: white;
        cursor: pointer;
        border: none;

        font-size: 1em;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;

        border-radius: 20px;
        margin-left: 50px;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 0px;

        div{
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }

        div>input{
            width: 80%;
            height: 50px;
            border: solid 1px var(--primary);
            
            margin-bottom: 30px;
            padding-left: 20px;
        }

        #experience{
            width: 80%;
            margin-left: 0px;
        }

        div>button{
            width: 80%;
            margin-left: 0px;
        }
    }
`

export const Crud = styled.div`
    width: 640px;
    height: 150px;

    box-shadow: 0px 0px 5px 0px #adadad;
    
    ul{
        width: 100%;
        height: 35px;

        margin-bottom: 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        li{
            width: 150px;
            height: inherit;

            float: left;
            list-style: none;
            color: black;

            margin-left: auto;
            margin-right: auto;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;
        margin-top: 1rem;
        
        li{
            width: 100%;
            height: inherit;
            float: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`

export const CrudInformation = styled.div`
    width: inherit;
    height: 100px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;

    #habilidades{
        float: left;
        margin-left: 30px;
        margin-top: 20px;
        height: 50px;
        margin-top: 10px;
    }

    @media(min-width: 320px) and (max-width: 890px){
        width: 100%;

        #habilidades{
            float: left;
            margin-left: 30px;
            margin-top: 20px;
            height: 50px;
            margin-top: 10px;
        }
    }
`

export const Habilidades = styled.div`
    width: 150px;
    height: 70px;
    float: left;

    margin-left: 30px;

    
    display: flex;
    align-items: center;
    justify-content: center;
    
    button{
        width: 70px;
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

    >p{
        font-weight: bold;

    }

    @media(min-width: 320px) and (max-width: 890px){
        margin-left: 0px;
    }
`

export const Separador = styled.div`
    width: 1px;
    height: 30px;
    background-color: gray;

    @media(min-width: 320px) and (max-width: 890px){
        display: none;
    }
    
`

export const ContainerAction = styled.div`
    width: 60px;
    height: 60px;
    float: left;
    background-color: lavenderblush;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 50px;
`