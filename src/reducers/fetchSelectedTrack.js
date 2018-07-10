import {FETCH_SELECTEDTRACK_SETID} from "../actions/types";

export default function fetchSelectedTrack(state, action) {
    switch(action.type){
        case FETCH_SELECTEDTRACK_SETID:
            return action.payload;
        default: return state;
    }
}