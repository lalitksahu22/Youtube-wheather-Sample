import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom'
//import StationCode from './stationcode'
import StationCode from './station'
import TrainBetweenRoute from './trains'
const API_KEY="bsz0cik7e7";
export default class RApp extends Component {
  componentDidMount(){

  }
  render() {
    
    return (
      <div className="rail">
        <h1 style={{color:"blue"}}>Welcome to Railway utility App</h1><br/>
       <Link to="/rail/Trainbetweenstation"><h5 style={{color:"red",display:"inline-block",marginRight:"10px"}}>Train between station</h5></Link>
        <Link to="/rail/GetStationCode"><h5 style={{color:"red",display:"inline-block"}}>Get Station Code</h5></Link>
        <Route path="/rail/GetStationCode" component={StationCode}/>
        <Route path="/rail/Trainbetweenstation" component={TrainBetweenRoute}/>
      </div>
    );
  }
}
