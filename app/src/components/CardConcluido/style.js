import styled from "styled-components"

export const ContentCard = styled.div`
    width: 100%;
    height: auto;
    padding: 15px;
    
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
        width: 70vw;
        margin: 12vh auto;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 0 2px black;
        
        @media(min-width: 320px) and (max-width: 600px){
            width: 95vw;
        }
        
        button{
            width: max-content;
            padding: 0px 20px;
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
        width: 100%;
        height: 400px;
        padding: 0 0px;
        display: flex;
        justify-content: center;
        overflow: auto;

        >form{
            width: max-content;
            
            hr{
                width: 100%;
                margin-top: 25px;;
                margin-bottom: 20px;
                background-color: gray;
                height: 3px;
            }
            
        }

        >form>label{
            width: 100%;
            font-size: 1.1rem;
            padding: 5px;
        }

        >form>input{
            width: 100%;
            height: 40px;
            border: solid 1px var(--primary);
            margin-bottom: 30px;
        }

        #grid1{
            display: flex;
            width: 94%;
            justify-content: space-between;
        }
        
        #grid2{
            display: flex;
            justify-content: space-between;
            gap: 1rem;

            >input{
                height: 40px;
                border: solid 1px var(--primary);
            }
            
            #input1{
               width: 200px;
            }
            
            #input2{
                width: 100px;
            }
            
            #input3{
                width: 100px;
            } 
        }

        #grid3{
            width: 85%;
            display: flex;
            justify-content: space-between;
        }
        
        #grid4{
            display: flex;
            justify-content: space-between;
            gap: 5px;
            
            >input{
                height: 40px;
                border: solid 1px var(--primary);
            }
            
            #firstChild{
                width: 80%;
            }
            
            #lastChild{
                width: 110px;
            }
        }

        >form>p{
            width: 100%;
            font-size: 0.8rem;
            padding: 5px;
            color: gray;
        }
        
        #avaliacao:not(textarea){
            display: flex;
            flex-direction: column;

            >div{
                margin-bottom: 10px;
                display: flex;
                justify-content: space-between;
                
                label{
                    background-color: var(--primary);
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    color: #ffffff;
                    
                }
                
                select{
                    background-color: var(--primary);
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    color: #ffffff;
                    font-size: 1rem;
                }
                
                input{
                    display: none;
                }

            }

            textarea{
                height: 115px;
                font-size: 1rem;
                padding: 10px;
            }
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

        button{
            width: max-content;
            padding: 0px 20px;
            height: 40px;

            background-color: var(--primary);
            color: white;
            cursor: pointer;
            border: none;

            font-size: 1em;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;

            border-radius: 20px;
            margin-top: 40px;
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

`

export const CardProgressStyle = styled.div`
    width: 100%;
    height: 30%;
    margin-top: 10px;
    padding: 20px;
    padding-bottom: 0px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 0px #333333;
    background-color: #cfcfcf;

    >p{
        margin-left: 190px;
        font-size: 1.5em;
        letter-spacing: 2px;
        position: relative;
        top: -10px;
    }
    
    >span{
        margin-left: 190px;
    }

    #description{
        height: 80px;
        font-size: 1em;
        font-family: sans-serif;
        padding-left: 0;
        overflow: auto;
    }

    img{
        width: 100px;
        height: 100px;
        border-radius: 100%;
    }

    @media only screen and (max-width: 500px){ 
        img{
            margin: auto;
        }
        
    }

    @media only screen and (max-width: 600px){ 
        display: flex;
        flex-direction: column;
        align-items: center;

        >p{
            margin-top: 10px;
            margin-left: 0px;
            font-size: 1.5em;
            letter-spacing: 2px;
        }

        #description{
            font-size: 1em;
            font-family: sans-serif;
            padding: 10px;
            padding-left: 0;
        }
    }

    @media (min-width: 601px){ 
        >p{
            margin-left: 190px;
            font-size: 1.5em;
            letter-spacing: 2px;
        }
    }

    div:last-child{
        display: flex;
        justify-content: end;
        position: relative;
        top: -20px;

        button{
            width: max-content;
            padding: 0px 20px;
            height: 40px;
            background-color: var(--primary);
            color: white;
            cursor: pointer;
            border: none;
            font-size: 1em;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 20px;
            margin-top: 30px;
        }

    }
    
    
`

export const ButtonProgress = styled.div`
    width: 100px;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    position: relative;
    top: -10px;
    gap: 5px;

    button{
        width: 100px;
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
`