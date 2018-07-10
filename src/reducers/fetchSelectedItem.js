import {FETCH_SELECTEDITEM_FAILURE, FETCH_SELECTEDITEM_REQUEST, FETCH_SELECTEDITEM_SUCCESS} from "../actions/types";

export default function fetchSelectedItem(state, action) {
    switch(action.type){
        case FETCH_SELECTEDITEM_REQUEST:
            return {
                ...state,
                isLoading:true
            };
        case FETCH_SELECTEDITEM_SUCCESS:
            return {
                ...state,
                item: action.payload
            };
        case FETCH_SELECTEDITEM_FAILURE:
            return{
                ...state,
                errors: action.payload
            };
        default: return state;
    }
}