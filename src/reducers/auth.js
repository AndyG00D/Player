import {AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS} from "../actions/types";

const initialState = {
    auth: {user:'', isLoading:false, errors:null}
};

export default function auth(state = initialState, action){
    switch(action.type){
        case AUTH_REQUEST:
            return{
                ...state,
                isLoading:true
            };
        case AUTH_SUCCESS:
            console.log('!' + action.payload);
            return{
                ...state,
                user:action.payload,
                errors:null
            };
        case AUTH_FAILURE:
            return{
                ...state,
                errors: action.payload
            };

        default: return state;
    }
}