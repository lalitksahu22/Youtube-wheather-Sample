import React,{Component} from 'react';
import {connect} from 'react-redux'


 class VideoSelected extends Component{
    
     url=`https://www.youtube.com/embed/${this.props.selectedvideo.id.videoId}`;
    
    render(){
       
       this.url=`https://www.youtube.com/embed/${this.props.selectedvideo.id.videoId}`;
        return(
        <div>
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