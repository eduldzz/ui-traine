import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Car from '../pages/Car';
import Country from '../pages/Country';
import Home from '../pages/Home';
import Instrument from '../pages/Instrument';
import Animal from '../pages/Animal';

export default function BasicExample() {
    return (
        <Router>
            <>
                <nav>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/">Home</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/country">Country</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/car">Car</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/instrument">Instrument</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/animal">Animal</Link>  
                </nav>

                <hr />

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/car" component={Car}/>
                    <Route exact path="/country" component={Country}/>
                    <Route exact pathe="/instrument" component={Instrument}/>
                    <Route exact pathe="/animal" component={Animal}/>
                    
                </Switch>
            </>
        </Router>
    );
}
