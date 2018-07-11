import {FETCH_PANELLIST_FAILURE, FETCH_PANELLIST_REQUEST, FETCH_PANELLIST_SUCCESS} from "../actions/types";

const initialState = {
    list:{},
    loading:true,
    errors:null
};

export default function panelList(state=initialState, action) {
    switch(action.type){
        case FETCH_PANELLIST_REQUEST:
            return {
                ...state,
                loading:false
            };
        case FETCH_PANELLIST_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading:true
            };
        case FETCH_PANELLIST_FAILURE:
            return{
                ...state,
                errors: action.payload,
                loading:true
            };
        default: return state;
    }
}
