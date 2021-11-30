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
    }
  
`

export const Foto = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 100%;
  border: solid 3px orange;
  margin-bottom: 10px;

  >img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
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
  /* border-right: solid 1px #CCC; */
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
        margin-bottom: 20px;
    }

  @media(min-width: 320px) and (max-width: 890px){
    width: 100%;
    border: none;

  }

`;

export const ContainerButton = styled.div`
    width: auto;
    height: 40px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 35px;

    >button{
        width: inherit;
        height: inherit;
        background-color: var(--primary);
        color: white;
        cursor: pointer;
        border: none;
        font-size: 1em;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 20px;
    }

    input[type='file'] {
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
    }

`

export const Inputs = styled.div`
    width: 500px;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    padding: 50px;

    > form > input{
        width: 400px;
        height: 50px;
        border: solid 1px var(--primary);
        margin-bottom: 30px;
        padding-left: 20px;
    }

    >form>select{
        width: 400px;
        height: 50px;
        margin-bottom: 30px;
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

    >form >#resultadoPositivo{
        margin-left: auto;
        margin-right: auto;
        display: none;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: rgba(7, 145, 0, 0.2);
        border: solid 3px rgba(12, 255, 0, 0.3);
        margin-bottom: 50px;

        >p{
            color: #044201;
            font-weight: bold;
            text-align: center;
            font-size: 1rem;
        }
    }

    >form >#resultadoNegativo{
        margin-left: auto;
        margin-right: auto;
        display: none;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: rgba(130, 0, 0, 0.2);
        border: solid 3px rgba(255, 0, 0, 0.3);
        margin-bottom: 50px;

        >p{
            color: #451313;
            text-align: center;
            font-weight: bold;
            font-size: 1rem;
        }
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

        >form>select{
            width: 80%;
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

export const ContainerHabilidades = styled.div`
    width: 700px;
    height: 350px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;

    >div>p{
        font-weight: bold;
        font-family: sans-serif;
        margin-bottom: 10px;
    }

    >div>input{
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

    >div>button{
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

        >div{
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }

        >div>input{
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

        >div>button{
            width: 80%;
            margin-left: 0px;
        }
    }
`

export const Crud = styled.div`
    width: 640px;
    height: 150px;
    box-shadow: 0px 0px 5px 0px #adadad;
    
    >ul{
        width: 100%;
        height: 35px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        >li{
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
        
        >li{
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

    >button{
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
    width: 70px;
    height: 70px;
    float: left;
    margin-left: 50px;
`