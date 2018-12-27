import React from 'react';
import {Route, Switch} from "react-router";
import {Link} from 'react-router-dom';
import HomePage from "./containers/HomePage";
import WidgetPage from './containers/WidgetPage';
import {hot} from 'react-hot-loader';

export const Routes = () => (
    <div>
        <Route path="/" render={() => <AppBar />}/>
        <Switch>
            <Route exact path="/" render={() => <HomePage />}/>
            <Route exact path="/contact" render={() => <h1 className="contact-container">Contact</h1>}/>
            <Route exact path="/about" render={() => <h1 className="about-container">About</h1>}/>
            <Route exact path="/widgets" render={() => <WidgetPage />}/>
        </Switch>
    </div>
);

export const AppBar = () => (
    <div>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/widgets">Widgets</Link>
        {' | '}
        <Link to="/contact">Contact</Link>
        {' | '}
        <Link to="/about">About</Link>
    </div>
);


export default hot(module)(Routes);