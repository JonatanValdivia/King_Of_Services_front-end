import './App.css';
import { GlobalStyleComponent } from './GlobalStyles';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Router from './Router.js';

function App() {
  return (
    <>
      <GlobalStyleComponent/>
      {/* <Home/> */}
      {/* <Login /> */}
      <Router/>
      {/* <Cadastro/> */}
      
    </>
  );
}

export default App;
