import React from 'react';
import {ApiUrls} from "../core/api-urls";
import AuthComponent from "../components/Sign/AuthComponent";
import axios from "axios";

export class AuthContainer extends React.Component{

    constructor(props) {
        super(props);
    }



    signInClick = () => {

 //       axios('https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/auth.php?app_id=123456&redirect_uri=http://localhost:3001/auth&perms=basic_access,email')
 //           .then(response => {
 //               console.log(response);
 //               window.open(response.headers['x-final-url'], '_self');
 //           })
 //           .catch(error => console.log(error))
    }

    render() {
        return ( <AuthComponent signInClick = {this.signInClick}/> );
    }
}

