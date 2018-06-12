import React,{Component} from 'react';
import VideoListItem from './video-list-item'
import {connect} from 'react-redux'
import _ from 'lodash';

class VideoList extends Component{
    //AIzaSyBnNG9DTuyDu3AJVYh4vXwOKr8A8h2QtJk
    getlist(){
       //console.log(JSON.stringify(this.props.videolist))
        return (this.props.videolist).map((v)=>{
            return(<VideoListItem video={v}></VideoListItem>);
        })
    }
    render(){
        if(!this.props.videolist){
            return (<div>loading</div>);
        }
        return(
        <div className="col-md-4 list-group">
            {this.getlist()}
            
        </div>
        )
    }
}
function mapStateToProps({videolist}){
    console.log((videolist))
    return {videolist};
}
export default connect(mapStateToProps)(VideoList);