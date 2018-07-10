import {FETCH_SELECTEDTRACK_SETID } from "./types";

export const fetchSelectedTrack = (id) =>{
    return function (dispatch){
                dispatch({
                    type: FETCH_SELECTEDTRACK_SETID,
                    payload: id
                });
    }
}