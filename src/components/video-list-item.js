import React,{Component} from 'react';
import {setSelectedVideo} from '../actions'
import {connect} from 'react-redux';
 class VideoListItem extends Component{
	//AIzaSyBnNG9DTuyDu3AJVYh4vXwOKr8A8h2QtJk
    render(){
        const imgurl=this.props.video.snippet.thumbnails.default.url;
        return(
        <div>
            <li className="list-group-item" onClick={()=>this.props.setSelectedVideo(this.props.video)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img src={imgurl} className="media-object"/>
                    </div>

                    <div className="media-body">
                        <div className="media-heading">{this.props.video.snippet.title}</div>
                    </div>

                </div>

            </li>
            
        </div>
        )
    }
}
export default connect(null,{setSelectedVideo})(VideoListItem);