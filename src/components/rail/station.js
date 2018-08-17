import React, { Component } from 'react';
import axios from 'axios';
import { loadavg } from 'os';
const API_KEY="bsz0cik7e7";
export default class StationCode extends Component {
    constructor(props){
        super(props);
        this.state={"search":"",result:[],load:true};
        this.clickhandler=this.clickhandler.bind(this);
        this.result=this.result.bind(this);
        this.getlist=this.getlist.bind(this);
    }
  
  clickhandler(){
    this.setState({load:false});
    axios.get(`https://api.railwayapi.com/v2/suggest-station/name/${this.state.search}/apikey/${API_KEY}/`)
          .then(data=>{
            this.setState({load:true});
            console.log([...this.state.result,...data.data.stations])
            this.setState({result:[...data.data.stations,...this.state.result]});
          })
  }
  getlist(){
    return this.state.result.map(d=>{
     return( <tr>
        <td>{d.name}</td>
        <td>{d.code}</td>
      </tr>
    )})
  }
  result(){
    if(this.state.result!=null && this.state.result.length!=0){
      return(
        <div className="rail">
        <table>
          <tr>
            <th>Name</th>
            <th>Code</th>
          </tr>
          {this.getlist()}
        </table>
        </div>
      )
    }
  }
  render() {
    return (
      <div >
        <h5>Station Name</h5>
        <input name="search" value={this.state.search} onChange={(event)=>{this.setState({"search":event.target.value})}}/>
        &nbsp; &nbsp;<button onClick={this.clickhandler}>Search</button><br/><br/>
        {this.state.load?null:<h5>Loading.........</h5>}
        {this.result()}
      </div>
    );
  }
}
