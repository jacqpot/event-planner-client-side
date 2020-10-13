import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import EventsContainer from './EventsContainer'
import EventIndex from '../components/EventIndex'

const Router = () => {
    
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/events' component={EventIndex} />
                <Route path='/about' component={About} />
            </Switch>
        )
};

export default Router;