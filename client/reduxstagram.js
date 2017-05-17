// let's go!
import React from 'react';

import {render} from 'react-dom';

import {Router, IndexRoute, Route, browserHistory} from 'react-router';

import css from './styles/style.styl';

import App from './components/App.js'
import PhotoDetails from './components/PhotoDetails.js'
import PhotoGrid from './components/PhotoGrid.js'

import {Provider} from 'react-redux';

import store, {history} from './store';


const router =(
    <Provider store={store}> 
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:photoId" component={PhotoDetails}> </Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));