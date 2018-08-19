import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import PromiseMiddelware from 'redux-promise'
const createStoreWithMiddleware = applyMiddleware(thunk,PromiseMiddelware)(createStore);

import { Provider } from 'react-redux';

import promiseMiddleware from 'redux-promise';

import App from './components/app';
import WApp from './components/whe/WApp';
import RApp from './components/rail/rapp';
import reducers from './reducers';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

import Demo from './demo';
import {hot,AppContainer} from 'react-hot-loader'
class AppContainer12 extends Component {
  
  render() {
      return (
    <div>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div className="container">
      <BrowserRouter>
        <Switch>
          <Route  path="/" exact component={App}/>
          <Route  path="/wheather" component={WApp}/>
          <Route  path="/rail" component={RApp}/>
          <Route  path="/demo" component={Demo}/>
          <Redirect  to="/"/>
        </Switch>
      </BrowserRouter>
      </div>
      </Provider>
    </div>
      )
  }
}

//export default  hot(module)(AppContainer12)
export default AppContainer12;

