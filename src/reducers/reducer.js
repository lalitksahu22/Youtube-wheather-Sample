import {FetchVideoList,FetchSelectedVideo} from '../actions';
export function fetchVideosList(state=null,action){
    
    switch(action.type){
        case FetchVideoList:
        
            return(
                //{videolist:action.payload,selectedVideo:action.payload[0]}
                action.payload
            )
            break;
    
        default:
            return state;
    }

}
export function fetchSelectedVideo(state=null,action){

    switch(action.type){
        
     case FetchSelectedVideo:
    
        return(
            
            //{videolist:action.payload}
            action.payload
        )
        break;
        default:
            return state;
    }

}