import {AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS} from "./types";
import axios from "axios/index";

const auth = (email, password) =>{
    return function(dispatch){
        dispatch({type: AUTH_REQUEST});
        axios.post(`https://reqres.in/api/register`, {'email':email, 'password':password})
            .then(response=>{
                localStorage.setItem('token', response.data.token);
                dispatch({
                    type: AUTH_SUCCESS,
                    payload: response.data.token
                })
            })
            .catch(err=>{
                dispatch({
                    type: AUTH_FAILURE,
                    payload:err
                })
            });
    }
}

export {auth};