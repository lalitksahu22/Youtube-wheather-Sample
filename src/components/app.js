import React, { Component } from 'react';
import SearchBar from './search-bar'
import VideoList from './video-list'
import {connect} from 'react-redux';
import {fetchVideoList} from '../actions'
import YTSearch from 'youtube-api-search'
import VideoSelected from './video-selected'
import Corrusalapp from './corrusal'
const API_KEY="AIzaSyBnNG9DTuyDu3AJVYh4vXwOKr8A8h2QtJk";
class App extends Component {
  componentDidMount(){

    this.props.fetchVideoList("cook");
    

  }
  render() {
    if(!this.props.videolist){
      return (<div>loading</div>);
  }
  console.log("******************");
  console.log("App rerender");
  console.log("****************");
    return (
      <div>
        <h1>Welcome to Video Search App</h1><br/>
        {/* <div className="row">
        <div  className="col-sm-12 corr">
          <Corrusalapp/><br/>
        </div>
        </div> */}
        <SearchBar/><br/><br/>
        <VideoSelected />
        
        <VideoList/>

      </div>
    );
  }
}
function mapStateToProps({videolist}){
  return({videolist});
}
// function mapDispatchToProps(dispatch){
//   return({a:()=>{dispatch(fetchVideoList())}});
// }
export default connect(mapStateToProps,{fetchVideoList})(App);

