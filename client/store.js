
import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//Root reducer

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';


const defaultState={
    posts: posts,
    comments: comments
}

const store  = createStore(rootReducer, defaultState);

const history = syncHistoryWithStore(browserHistory,store);


export default history;