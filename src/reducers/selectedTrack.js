import {FETCH_SELECTEDTRACK_SETID} from "../actions/types";

//const initialState = {
//    selectedTrack: undefined
//};

export default function selectedTrack(state=null, action) {
    switch(action.type){
        case FETCH_SELECTEDTRACK_SETID:
            return action.payload;
        default: return state;
    }
}