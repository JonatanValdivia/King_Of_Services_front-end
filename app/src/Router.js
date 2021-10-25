import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CadastroTrabalhador from "./pages/CadastroTrabalhador";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import CadastroFacebookGoogle from "./pages/CadastroGoogleFacebook";
import Listagem from "./pages/Listagem dos profissionais";
import PerfilPrestador from "./pages/PerfilPrestador";
import CadastroCliente from "./pages/CadastroCliente";

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
                    <Route exact path="/cadastroFacebookGoogle">
                        <CadastroFacebookGoogle/>
                    </Route>
                    <Route exact path="/cadastro">
                        <Cadastro/>
                    </Route>
                    <Route path="/PerfilPrestador/:idPrestador" component={PerfilPrestador} />
                </Switch>
            </BrowserRouter>
        );
}

export default Router;