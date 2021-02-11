import React from 'react';
import {
Switch,
Route
} from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import NotFound from './NotFound'


function Routes({dogs}) {
    //dogs prop is passed down from App default props. 
    //Creat a switch path route to /dogs and /dogs/:name params
    //both paths take a prop passed down from App default prop -> Routes 
return (
    <Switch>
    <Route exact path="/dogs">
        <DogList dogs={dogs} />
    </Route>
    <Route path="/dogs/:name">
        <DogDetails dogs={dogs} />
    </Route>
    <NotFound/>
    </Switch>
);
}

export default Routes;
