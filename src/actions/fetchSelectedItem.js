import {FETCH_SELECTEDITEM_FAILURE, FETCH_SELECTEDITEM_REQUEST, FETCH_SELECTEDITEM_SUCCESS} from "./types";
import axios from "axios";

export const fetchSelectedItem = (request) =>{
    return function (dispatch){
        dispatch({type: FETCH_SELECTEDITEM_REQUEST});
            axios.get(request)
                .then(response => {
                    dispatch({
                        type: FETCH_SELECTEDITEM_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => {
                    dispatch({
                        type: FETCH_SELECTEDITEM_FAILURE,
                        payload: err
                    })
                });
        }
    }
