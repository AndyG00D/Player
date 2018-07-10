import {FETCH_PANELLIST_FAILURE, FETCH_PANELLIST_REQUEST, FETCH_PANELLIST_SUCCESS} from "../actions/types";

export default function fetchPanelList(state, action) {
    switch(action.type){
        case FETCH_PANELLIST_REQUEST:
            return {
                ...state,
                isLoading:true
            };
        case FETCH_PANELLIST_SUCCESS:
            return {
                ...state,
                list: action.payload
            };
        case FETCH_PANELLIST_FAILURE:
            return{
                ...state,
                errors: action.payload
            };
        default: return state;
    }
}
