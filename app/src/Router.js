import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CadastroTrabalhador from "./pages/CadastroTrabalhador";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import CadastroCliente from "./pages/CadastroCliente";
import Listagem from "./pages/Listagem dos profissionais";

function Router(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/CadastroTrabalhador">
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
                    <Route exact path="/listagem">
                        <Listagem/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
}

export default Router;