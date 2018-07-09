import React from 'react';
import styles from './Register.css'
import cx from 'classnames';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import {RegisterView} from "./RegisterView";
import {connect} from "react-redux";
import {auth} from '../../actions/auth.js';
import {ChoosePageContainer} from "../../containers/ChoosePageContainer";

export class Register extends React.Component{

    constructor(props){
        super(props);
    }

    submit = (values) =>{
        console.log(values);
        this.props.auth(values.Email, values.Password);
    }

    render(){
        return (<RegisterView onSubmit = {this.submit}/>
        );
    }
}


const mapStateToProps = store => {
    const {auth} = store;
    return {
        auth
    }
};

export default connect(mapStateToProps, {
    auth
})(Register)