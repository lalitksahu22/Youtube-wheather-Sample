import {FETCH_WHEATHER} from '../actions/action_whe'
export function getwheatherdata(state=[],action){
    console.log("in reducer");
    console.log(action);
    switch(action.type){
        case FETCH_WHEATHER:
            if(action.payload.cod==404){
                return state;
            }
            return [...state, action.payload.data]
        default:
            return state;
    }
}