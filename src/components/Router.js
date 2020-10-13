import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import EventsList from './EventsList'


const Router = () => {
    
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/events' component={EventsList} />
                <Route path='/about' component={About} />
            </Switch>
        )
};

export default Router;