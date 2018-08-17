import React, { Component } from 'react';
import axios from 'axios';
import { loadavg } from 'os';
import Availability from './availability';
const API_KEY="bsz0cik7e7";
export default class TrainBetweenRoute extends Component {
    constructor(props){
        super(props);
        this.state={src:"",des:"",date:"",result:[],load:false,"faredata":"",availability_array:[]};
        this.clickhandler=this.clickhandler.bind(this);
        this.result=this.result.bind(this);
        this.getlist=this.getlist.bind(this);
        this.setfields=this.setfields.bind(this);
        this.callfareapi_function=this.callfareapi_function.bind(this);
    }
    setfields(event){
        this.setState({[event.target.name]:event.target.value});
    }
  
  clickhandler(){
    this.setState({load:false});
    //var date=`${this.state.date.dd}-${this.state.data.mm}-${this.state.date.yyyy}`;
    axios.get(`https://api.railwayapi.com/v2/between/source/${this.state.src}/dest/${this.state.des}/date/${this.state.date}/apikey/${API_KEY}/`)
          .then(data=>{
            this.setState({load:true});
            console.log([...this.state.result,...data.data.trains])
            this.setState({result:[...data.data.trains]});
          })
    console.log("calleds")
  }
  getlist(){
    return this.state.result.map(d=>{
     return( <tr>
        <td>{d.number}</td>
        <td>{d.name}</td>
        <td>{d.src_departure_time}</td>
        <td>{d.dest_arrival_time}</td>
        <td>{d.travel_time}</td>
        <td>{d.from_station.name}</td>
        <td>{d.to_station.name}</td>
        <td> {this.f1(d)}</td>
      </tr>
    )})
  }
  f1(trow){
    return trow.classes.map(crow=>{
      return(
        // style={{display:'inline-block', float:'right'}}
        <span className="railclass" onClick={()=>this.callfareapi_function(trow.number,crow.code)}>
        <u>
        {crow.code}
        </u>
        </span>
        
      )
    }
    )
  }
  callfareapi_function(tnumber,classcode){
    axios.get(`https://api.railwayapi.com/v2/fare/train/${tnumber}/source/${this.state.src}/dest/${this.state.des}/age/35/pref/${classcode}/quota/GN/date/${this.state.date}/apikey/${API_KEY}/`)
    .then(function(data){
       this.setState({faredata:data.data})
      // console.log(data);
      // console.log("*********************************************")
      // console.log(data.data.fare);
     // return
       //return axios.get(`https://api.railwayapi.com/v2/fare/train/${tnumber}/source/${this.state.src}/dest/${this.state.des}/age/35/pref/${classcode}/quota/GN/date/${this.state.date}/apikey/${API_KEY}/`)
    }.bind(this))
      .catch(function(error){
        console.log(error);
      })

      axios.get(`https://api.railwayapi.com/v2/check-seat/train/${tnumber}/source/${this.state.src}/dest/${this.state.des}/date/${this.state.date}/pref/${classcode}/quota/GN/apikey/${API_KEY}/`)
      .then(function(response){
        this.setState({availability_array:response.data.availability})
        console.log(response);
        //console.log(response);
        
      }.bind(this))
      .catch(function(error){
        console.log(error);
      })
    }
  result(){
    if(this.state.result!=null && this.state.result.length!=0){
      return(
        <div className="rail">
        {this.state.load?null:<h5>Loading.........</h5>}
        <table>
          <tr>
            <th>Train NO.</th>
            <th>Train Name</th>
            <th>Src Departure</th>
            <th> Dest Arival</th>
            <th>Travel Time</th>
            <th>From</th>
            <th>To</th>
            <th>Class</th>
            
          </tr>
          {this.getlist()}
        </table>
        </div>
      )
    }
  }
  render() {
    var trainname=this.state.faredata?this.state.faredata.train.name:null;
    return (

      <div className="container-fluid">
      <div className="row">
        <div className="col-md-8" style={{backgroundColor: 'yellow'}}>
            <div >
               <h5>Station Name</h5>
            <input name="src" placeholder="Source Station" value={this.state.src} onChange={this.setfields}/>
            <input name="des" placeholder="Destination Station" value={this.state.des} onChange={this.setfields}/>
            <input name="date" placeholder="dd-mm-yyyy" value={this.state.date} onChange={this.setfields}/>
            <button onClick={this.clickhandler}>Search</button><br/><br/>
            {this.result()} 
           
            
          </div>
        </div>
        <div className="col-md-4 ">
        {/* <h2>Trainname</h2>:{trainname}
        <h2>Fare</h2>:{this.state.faredata.fare}
        <h2>Seat Availability</h2>:{this.state.availability_array} */}
        <Availability fare={this.state.faredata.fare} trainname={trainname} availability_array={this.state.availability_array}/>
        </div>
      </div>
    </div>

      // <div >
      //   <h5>Station Name</h5>
      //   <input name="src" placeholder="Source Station" value={this.state.src} onChange={this.setfields}/>
      //   <input name="des" placeholder="Destination Station" value={this.state.des} onChange={this.setfields}/>
      //   <input name="date" placeholder="dd-mm-yyyy" value={this.state.date} onChange={this.setfields}/>
      //   <button onClick={this.clickhandler}>Search</button><br/><br/>
      //   {this.result()}
         
      // </div>
    );
  }
}
