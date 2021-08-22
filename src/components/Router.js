import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Adoptado from '../screems/AdoptadoScreen';
import Home from '../screems/HomeScreen';
import Login from '../screems/LoginScreen';

export const AppRouter = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/felicidades">
                <Adoptado/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
        </Switch>
    )
}

export default AppRouter;