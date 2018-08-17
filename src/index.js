import React from 'react';
import ReactDOM from 'react-dom';
import Container from './appcontainer';
import {hot,AppContainer} from 'react-hot-loader'
import './style'
//var a=createStore(reducers,applyMiddleware(thunk,PromiseMiddelware))

ReactDOM.render(
   <AppContainer><Container/></AppContainer>
  , document.querySelector('.con')
);

if (module.hot) {
     module.hot.accept('./appcontainer', function() {
      var Container1= require('./appcontainer').default
      ReactDOM.render(
        <AppContainer><Container1/></AppContainer>
       , document.querySelector('.con')
     );
     }
    )
    
   }
 


