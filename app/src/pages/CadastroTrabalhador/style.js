import styled from "styled-components"

export const ArticleCadastro = styled.article`
    width: 1000px;
    height: auto;
    border: solid 1px #b1b5b2;

    margin-right: auto;
    margin-left: auto;
`

export const ImgProfileStyle = styled.div`
    width: 200px;
    height: 200px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;

    >img{
        width: inherit;
        height: inherit;
    }
`

export const ContainerButton = styled.div`
    width: 150px;
    height: 40px;

    margin-left: auto;
    margin-right: auto;
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

    > form > textarea{
        width: 400px;
        height: 150px;
        border: solid 1px var(--primary);
        
        padding: 10px;
        margin-bottom: 30px;
        font-family: sans-serif;
    }
`

export const ContainerHabilidades = styled.div`
    width: 700px;
    height: 350px;

    margin-left: auto;
    margin-right: auto;
    padding: 30px;

    >p{
        font-weight: bold;
        font-family: sans-serif;

        margin-bottom: 10px;
    }

    >input{
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

    >button{
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
`

export const CrudInformation = styled.div`
    width: inherit;
    height: 100px;
    background-color: white;

    #habilidades{
        float: left;
        margin-left: 30px;
        margin-top: 20px;
        height: 50px;

        margin-top: 10px;
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
`

export const Separador = styled.div`
    width: 1px;
    height: 30px;
    background-color: gray;
`

export const ContainerAction = styled.div`
    width: 70px;
    height: 70px;
    float: left;

    margin-left: 50px;
`