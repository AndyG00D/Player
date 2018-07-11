import {FETCH_SELECTEDITEM_FAILURE, FETCH_SELECTEDITEM_REQUEST, FETCH_SELECTEDITEM_SUCCESS, CLEAR_SELECTEDITEM} from "../actions/types";

const initialState = {
    item:{},
    loading:true,
    errors:null
};

export default function selectedItem(state=initialState, action) {
    switch(action.type){
        case FETCH_SELECTEDITEM_REQUEST:
            return {
                ...state,
                loading:false
            };
        case FETCH_SELECTEDITEM_SUCCESS:
            return {
                ...state,
                item: action.payload,
                loading:true
            };
        case FETCH_SELECTEDITEM_FAILURE:
            return{
                ...state,
                errors: action.payload,
                loading:true
            };
        case CLEAR_SELECTEDITEM:
            return{
                ...state,
                item: {}
            };
        default: return state;
    }
}