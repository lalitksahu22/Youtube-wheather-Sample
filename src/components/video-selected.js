import React,{Component} from 'react';
import {connect} from 'react-redux'


 class VideoSelected extends Component{
    
     url=`http://www.youtube.com/embed/${this.props.selectedvideo.id.videoId}`;
    
    render(){
        console.log("******************");
        console.log("video selected rerender");
        console.log("****************");
       this.url=`http://www.youtube.com/embed/${this.props.selectedvideo.id.videoId}`;
        return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={this.url}></iframe>
            </div>
            <div className="details">
                <div>{this.props.selectedvideo.snippet.title}</div>
                <div>{this.props.selectedvideo.snippet.description}</div>
            </div>
            
        </div>
        )
       
    }
}
function mapStateToProps({selectedvideo}){
    return {selectedvideo};
}
export default connect(mapStateToProps)(VideoSelected);