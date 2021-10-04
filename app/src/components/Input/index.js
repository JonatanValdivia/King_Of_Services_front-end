import { Container } from "./style";

function Input(){
    const getAllProviders = async() =>{
        fetch('http://kingofservices.com.br/Prestadores')
        .then((response) => response.json())
        .then((responseJson) => (
            console.log(responseJson)
            //setData(responseJson.records)
        ));
      };
      //getCLient();

      const getAllProvidersOfSearch = async(profession) =>{
        fetch(`http://kingofservices.com.br/PesquisarPrestador/${profession}`)
        .then((response) => response.json())
        .then((responseJson) => (
            console.log(responseJson)
            //setData(responseJson.records)
        ));
      };

      getAllProvidersOfSearch('pintor')

      const search = async () =>{
          const input = document.getElementById('search').value
          getAllProvidersOfSearch(input)
      }

    return(
        <Container>
            <input placeholder="Informe o que precisa..." id="search"/>
            <button onClick={search}>Buscar</button>
        </Container>
    );
}

export default Input;