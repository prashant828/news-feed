import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import newsChannelsList from './store/reducers/newsChannelsList';
import newsList from './store/reducers/newsList';
import searchResult from './store/reducers/searchResult'
import{BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios'

axios.defaults.headers.common['x-api-key'] = '91a53883772d44bf8ee89d81249d4ac7';

const rootReducer = combineReducers({
    channel: newsChannelsList,
    news: newsList,
    searchResult: searchResult
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
