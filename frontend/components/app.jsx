import React from 'react';
import DogIndexContainer from './index/dog_index_container'
import {Switch, Route} from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <Switch>
                <Route exact path="/" component={DogIndexContainer}/>
            </Switch>
        </header>
    </div>
);

export default App;