import React,{Component} from 'react';
import {connect} from 'react-redux';
import Item from './item';
 class List extends Component{
	
    getlist(){
        //console.log(JSON.stringify(this.props.videolist))
         return (this.props.wheatherdata).map((d)=>{
             return(
                 <Item data={d}/>
             );
         })
     }
     render(){
         
         if(!this.props.wheatherdata){
             return (<div>loading</div>);
         }
         console.log(this.props.wheatherdata);
         return(
        <div className="wh">
         <table className="table table-hover">
             <thead>
             <tr>
                 <th>City</th>
                 <th>Temreture</th>
                 <th>Pressure</th>
            </tr>
            </thead>
             {this.getlist()}
             
         </table>
         </div>
         )
     }
}
function mapStateToProps({wheatherdata}){
    return({wheatherdata});
  }
export default connect(mapStateToProps)(List);