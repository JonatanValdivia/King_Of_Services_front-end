import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroTrabalhador from "./pages/CadastroTrabalhador";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import CadastroFacebookGoogle from "./pages/CadastroGoogleFacebook";
import Listagem from "./pages/Listagem dos profissionais";
import PerfilUserPrestadorLogado from "./pages/Perfis/PerfilPrestador";
import PerfilUserClienteLogado from "./pages/Perfis/PerfilCliente";
import PerfilPrestador from "./pages/PerfilPrestador";
import PerfilCliente from "./pages/Perfis/PerfilCliente";
import CadastroCliente from "./pages/CadastroCliente";
import ProgressPage from "./pages/AndamentoDoServico";
import EditarPerfilCliente from "./pages/EditarPerfil/Cliente";
import EditarPerfilPrestador from "./pages/EditarPerfil/Trabralhador";
import MaisPedidos from "./pages/MaisPedidos";
import Solicitacoes from "./pages/Solicitacoes";

function Router(){
    const login = localStorage.getItem('login') ?? false;
    const perfil = () =>{
        if(login == '"prestador"'){
            return(
                <PerfilUserPrestadorLogado/>
            );
        }else{
            return(
                <PerfilUserClienteLogado/>
            );
        }
    }

    const ediatarPerfil = () =>{
        if(login == '"prestador"'){
            return(
                <EditarPerfilPrestador/>
            );
        }else{
            return(
                <EditarPerfilCliente/>
            );
        }
    }

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/Listagem/:profissao" component={Listagem} />
                <Route exact path="/CadastroTrabalhador">
                    <CadastroTrabalhador/>
                </Route>
                <Route exact path="/cadastrocliente">
                    <CadastroCliente/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/meusservicos">
                    <ProgressPage/>
                </Route>
                <Route exact path="/solicitacoes">
                    <Solicitacoes/>
                </Route>
                <Route exact path="/cadastroFacebookGoogle">
                    <CadastroFacebookGoogle/>
                </Route>
                <Route exact path="/cadastro">
                    <Cadastro/>
                </Route>
                <Route path="/PerfilPrestador/:idPrestador" component={PerfilPrestador} />
                <Route exact path="/perfil">
                    {perfil()}
                </Route>
                <Route exact path="/perfilCliente">
                    <PerfilCliente/>
                </Route>
                <Route exact path="/editar">
                    {ediatarPerfil()}
                </Route>
                <Route exact path="/maispedidos">
                        <MaisPedidos/>
                    </Route>
                {/* <Route exact path="/editarperfiltrabalhador">
                    <EditarPerfilPrestador/>
                    
                </Route> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Router;