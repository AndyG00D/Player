import '../actions/types.js';
import {FETCH_PLAYLIST_FAILURE, FETCH_PLAYLIST_REQUEST, FETCH_PLAYLIST_SUCCESS} from "../actions/types";

const initialState = {
    playList: {},
    isLoading: false,
    errors:null
};

export default  function (state = initialState, action){
    console.log('reducer');
    switch(action.type){
        case FETCH_PLAYLIST_REQUEST:
            return{
                ...state,
                isLoading:true
            };
        case FETCH_PLAYLIST_SUCCESS:
            console.log('!' + action.payload);
            return{
                ...state,
                playList:action.payload,
                errors:null
            };
        case FETCH_PLAYLIST_FAILURE:
            return{
                ...state,
                errors: action.payload
            };
        default: return state;
    }
}