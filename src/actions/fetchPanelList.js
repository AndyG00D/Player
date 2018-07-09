import {FETCH_PANELLIST_FAILURE, FETCH_PANELLIST_REQUEST, FETCH_PANELLIST_SUCCESS} from "./types";
import axios from "axios";

export const fetchPanelList = (request) =>{
    return function (dispatch){
        dispatch({type: FETCH_PANELLIST_REQUEST});
        axios.get(request)
            .then(response=>{
                dispatch({
                    type: FETCH_PANELLIST_SUCCESS,
                    payload: response.data.data
                })
            })
            .catch(err=>{
                dispatch({
                    type: FETCH_PANELLIST_FAILURE,
                    payload:err
                })
            });
    }
}