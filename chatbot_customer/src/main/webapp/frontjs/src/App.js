import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";

import Footer from "./components/Footer";

import MainContainer from './containers/MainContainer';
import DashboardContainer from './containers/DashboardContainer';
import NoticeContainer from './containers/NoticeContainer';
import IntroContainer from './containers/IntroContainer';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginContainer}/>
                <Route path="/main" component={MainContainer} />
                <Route path="/dashboard" component={DashboardContainer} />
                <Route path="/notice" component={NoticeContainer} />
                <Route path="/intro" component={IntroContainer} />
            </Switch>
			<Footer />
        </BrowserRouter>
    )

}

export default App;
