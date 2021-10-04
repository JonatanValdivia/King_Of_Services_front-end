import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function Router(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
}

export default Router;