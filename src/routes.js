import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";

//containersImport
import Board from './Containers/Board/Board'
import NewNote from './Containers/NewNote/NewNote'


const Routes = () => (

    <BrowserRouter >
        < Switch >
        <Route exact path="/" component={Board}/>
        <Route exact path="/new-note" component={NewNote}/>
         </Switch>
    </BrowserRouter>

);

export default Routes;