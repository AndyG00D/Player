import {FETCH_PLAYLIST_FAILURE, FETCH_PLAYLIST_REQUEST, FETCH_PLAYLIST_SUCCESS} from "./types";
import axios from "axios/index";

export const fetchPlaylist = id =>{
    return function(dispatch){
        console.log('fetch');
        dispatch({type: FETCH_PLAYLIST_REQUEST});
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`)
            .then(response=>{
                dispatch({
                    type: FETCH_PLAYLIST_SUCCESS,
                    payload: response.data.data
                })
            })
            .catch(err=>{
                dispatch({
                    type: FETCH_PLAYLIST_FAILURE,
                    payload:err
                })
            });
    }
}