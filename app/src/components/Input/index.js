import { Container } from "./style";
import api from '../../services/api';
import { useEffect, useState } from 'react';
import Listagem from '../../pages/Listagem dos profissionais';
import { Link } from 'react-router-dom';

function Input(){

    const [prestadores, setPrestadores] = useState([])
    const [loading, setLoading] = useState(true)
    const getAllProviders = async() =>{
        fetch('http://kingofservices.com.br/Prestadores')
        .then((response) => response.json())
        .then((responseJson) => (
            console.log(responseJson)
            //setData(responseJson.records)
        ));
      };

      const getAllProvidersOfSearch = async(profession) =>{
        
        api.get(`http://kingofservices.com.br/PesquisarPrestador/${profession}`).then(({data}) =>{
            setPrestadores(data)
            //console.log(prestadores.map(element => element))
        });
        

        return(
            <>
                {Listagem(prestadores)}
            </>
        )
      };

      const search = async () =>{
          const input = document.getElementById('search').value
          getAllProvidersOfSearch(input)
      }

    return(
        <Container>
            <input placeholder="Informe o que precisa..." id="search"/>
            
                <button onClick={search}>
                    Buscar
                </button>
           
        </Container>
    );
}

export default Input;