import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroTrabalhador from "./pages/CadastroTrabalhador";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import CadastroFacebookGoogle from "./pages/CadastroGoogleFacebook";
import Listagem from "./pages/Listagem dos profissionais";
import PerfilPrestador from "./pages/Perfis/PerfilPrestador";
import PerfilCliente from "./pages/Perfis/PerfilCliente";
import CadastroCliente from "./pages/CadastroCliente";
import ProgressPage from "./pages/AndamentoDoServico";
import EditarPerfilCliente from "./pages/EditarPerfil/Cliente";
import EditarPerfilPrestador from "./pages/EditarPerfil/Trabralhador";


function Router(){
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
                    <Route exact path="/cadastroFacebookGoogle">
                        <CadastroFacebookGoogle/>
                    </Route>
                    <Route exact path="/cadastro">
                        <Cadastro/>
                    </Route>
                    <Route path="/PerfilPrestador/:idPrestador" component={PerfilPrestador} />
                    <Route exact path="/perfil">
                        <PerfilPrestador/>
                    </Route>
                    <Route exact path="/perfilCliente">
                        <PerfilCliente/>
                    </Route>
                    <Route exact path="/editarperfilcliente">
                        <EditarPerfilCliente/>
                        {console.log("cliente")}
                    </Route>
                    <Route exact path="/editarperfiltrabalhador">
                        <EditarPerfilPrestador/>
                        {console.log("trabalhador")}
                    </Route>
                </Switch>
            </BrowserRouter>
        );
}

export default Router;