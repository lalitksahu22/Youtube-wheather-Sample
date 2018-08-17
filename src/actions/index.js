import YTSearch from 'youtube-api-search'
import _ from 'lodash';
const API_KEY="AIzaSyBnNG9DTuyDu3AJVYh4vXwOKr8A8h2QtJk";
export const FetchVideoList="fetchVideoList";
export const FetchSelectedVideo='fetchSelectedVideo'
export function fetchVideoList(term){
    
    return dispatch => {
        console.log("IN ACTION");
        YTSearch({key:API_KEY,term:term}
             ,(data)=>{
                console.log("aa")
                // console.log('youtube '+JSON.stringify(data))
                dispatch(setSelectedVideo(data[0]));

                 dispatch({
                     type:FetchVideoList,
                    // payload:_.mapKeys(data,(e)=> e.id.videoId)
                    payload:data
                 });
             }
             );
       
      };

}
export function setSelectedVideo(video){
    console.log("bb");
    console.log(video)
    return {
            type:FetchSelectedVideo,
            payload:video
            }

}
export function videoFromChat(videos){
   
    return {
        type:FetchVideoList,
       // payload:_.mapKeys(data,(e)=> e.id.videoId)
       payload:videos
    }

}