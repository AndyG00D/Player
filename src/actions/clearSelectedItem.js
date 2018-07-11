import {CLEAR_SELECTEDITEM} from "./types";

export const clearSelectedItem = () =>{
    return function (dispatch){
        dispatch({type: CLEAR_SELECTEDITEM});
    }
}