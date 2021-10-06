import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CadastroTrabalhador from "./pages/CadastroTrabalhador";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import CadastroCliente from "./pages/CadastroCliente";

function Router(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/cadastrotrabalhador">
                        <CadastroTrabalhador/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/cadastrocliente">
                        <CadastroCliente/>
                    </Route>
                    <Route exact path="/cadastro">
                        <Cadastro/>
                    </Route>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
}

export default Router;