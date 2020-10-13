import React from 'react';


import Router from './Router'
import EventsContainer from './EventsContainer'
import NavBar from './Navbar'
const App = () => {
    return (
        <div>
            <NavBar />
            <Router />
            <EventsContainer />

        </div>
    );
};

export default App;