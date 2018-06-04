import React from "react";
import {BrowserRouter, Router, Route, Switch} from "react-router-dom";

import NavBar from "../NavBar";
import Login from "../login";
import Portada from "../Portada";

export default () => (

    <BrowserRouter>

        <div>
        
        <Route path="/"  component={Portada} />

        <Switch>
            <Route path="/home"  component={NavBar} />
        </Switch> 

        <Route path="/login"  component={Login} />

        </div>
    </BrowserRouter> 
);