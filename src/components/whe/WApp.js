import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchwheather} from '../../actions/action_whe';
import Search from './search'
import List from './list'


class WApp extends Component {
  // componentDidMount(){

  //   this.props.fetchwheather("hyderabad");
    

  // }
  render() {
  //   if(!this.props.videolist){
  //     return (<div>loading</div>);
  // }
 
    return (
      <div>
        <h1>Welcome to Wheather history App</h1><br/>
        <Search/><br/><br/>
        <List/>
      </div>
    );
  }
}
function mapStateToProps({wheatherdata}){
  return({wheatherdata});
}

export default connect(mapStateToProps,{fetchwheather})(WApp);
