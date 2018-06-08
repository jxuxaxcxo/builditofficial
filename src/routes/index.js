import React from "react";
import {BrowserRouter, Router, Route, Switch} from "react-router-dom";

import NavBar from "../NavBar";
import Login from "../login";
import Portada from "../Portada";
import Home from "../Home";


export default () => (

    <BrowserRouter>

        <div>
        
        <Switch>
        <Route path="/"  component={Home} />

        <Route path="/home"  component={Home} />

        </Switch>

        <Route path="/login"  component={Login} />

        </div>
    </BrowserRouter> 
);