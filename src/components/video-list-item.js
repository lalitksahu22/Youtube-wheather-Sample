import React,{Component} from 'react';
import {setSelectedVideo} from '../actions'
import {connect} from 'react-redux';
 class VideoListItem extends Component{
	//AIzaSyBnNG9DTuyDu3AJVYh4vXwOKr8A8h2QtJk
    // render(){
    //     const imgurl=this.props.video.snippet.thumbnails.default.url;
    //     return(
    //     <div>
    //         <li className="list-group-item" onClick={()=>this.props.setSelectedVideo(this.props.video)}>
    //             <div className="video-list media">
    //                 <div className="media-left">
    //                     <img src={imgurl} className="media-object"/>
    //                 </div>

    //                 <div className="media-body">
    //                     <div className="media-heading">{this.props.video.snippet.title}</div>
    //                 </div>

    //             </div>

    //         </li>
            
    //     </div>
    //     )
    // }
    render(){
        const imgurl=this.props.video.snippet.thumbnails.default.url;
        return(
        <div>
            <div className="row list-group-item-custom" style={{border:"1px light black", marginBottom:"1rem"}} onClick={()=>this.props.setSelectedVideo(this.props.video)}>

            <div className="col-12" style={{display:"flex"}}>
                <div  style={{flex:"0 0 auto"}}>
                    <img src={imgurl}/>
                </div>
                <div style={{flex:"1 1 auto",paddingLeft:"3px"}}>
                    <div className="media-heading">{this.props.video.snippet.title}</div>
                </div>
             </div>

                   

            </div>
            
        </div>
        )
    }
}
export default connect(null,{setSelectedVideo})(VideoListItem);