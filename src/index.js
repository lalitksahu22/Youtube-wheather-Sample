import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk'
import App from './components/app';
import WApp from './components/whe/WApp';
import RApp from './components/rail/rapp';
import reducers from './reducers';
import {BrowserRouter,Route} from 'react-router-dom';
import PromiseMiddelware from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(thunk,PromiseMiddelware)(createStore);
//var a=createStore(reducers,applyMiddleware(thunk,PromiseMiddelware))
// This is a try
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route  path="/" exact component={App}/>
        <Route  path="/wheather" component={WApp}/>
        <Route  path="/rail" component={RApp}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
