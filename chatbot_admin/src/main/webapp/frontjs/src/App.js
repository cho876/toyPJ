import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import BoardContainer from "./containers/BoardContainer";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginContainer}/>
                <Route path="/board" component={BoardContainer} />
            </Switch>
        </BrowserRouter>
    )

}

export default App;
