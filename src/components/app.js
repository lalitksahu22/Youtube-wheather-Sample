import React, { Component } from 'react';
import SearchBar from './search-bar'
import VideoList from './video-list'
import {connect} from 'react-redux';
import {fetchVideoList} from '../actions'
import YTSearch from 'youtube-api-search'
import VideoSelected from './video-selected';
import Corrusalapp from './corrusal'
import Chatbot from './chatbot'
import UserChatBot from './userchatbot'
const API_KEY="AIzaSyBnNG9DTuyDu3AJVYh4vXwOKr8A8h2QtJk";
class App extends Component {
  componentDidMount(){

    this.props.fetchVideoList("cook");
    //this.state={a:1};
    //setInterval(()=>{this.setState({a:this.state.a+1})},1000)
    
  }
  render() {
    if(!this.props.videolist){
      return (<div>loading</div>);
  }
  // console.log("******************");
  // console.log("App rerender");
  // console.log("****************");
    return (
      <div>
        <h1>Welcome to Video Search </h1><br/>
        {/* {this.state.a}<br/> */}
        {/* <div className="row">
        <div  className="col-sm-12 corr">
          <Corrusalapp/><br/>
        </div>
        </div> */}
        <SearchBar/><br/><br/>
        <div className="row">
          <div className="col-md-8 col-12"> <VideoSelected /></div>
          <div className="col-md-4 col-12">  <VideoList/></div>
        </div>
      
        <Chatbot/>
        {/* <UserChatBot/> */}
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

