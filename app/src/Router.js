import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CadastroTrabalhador from "./pages/CadastroTrabalhador";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

function Router(){
        return(
            <BrowserRouter>
                <Switch>

                    <Route exact path="/">
                        <CadastroTrabalhador/>
                    </Route>

                    {/* <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route exact path="/CadastroCliente">
                        <CadastroCliente/>
                    </Route>
                    <Route exact path="/">
                        <Cadastro/>
                    </Route>
                    <Route exact path="/home">
                        <Home/>
                    </Route> */}
                </Switch>
            </BrowserRouter>
        );
}

export default Router;