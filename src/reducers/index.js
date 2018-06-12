import { combineReducers } from 'redux';
import {fetchVideosList,fetchSelectedVideo} from './reducer'
import {getwheatherdata} from './reducer_whe'

const rootReducer = combineReducers({
  videolist:fetchVideosList,
  selectedvideo:fetchSelectedVideo,
  wheatherdata:getwheatherdata
});

export default rootReducer;
