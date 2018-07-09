import React from 'react';
import styles from './Register.css'
import cx from 'classnames';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import  './vallidate';
import {passwordValidate} from "./vallidate";

export class RegisterView extends React.Component{

    constructor(props){
        super(props);
    }

    renderField = ({input, meta}) =>{
        return (
              <input className={styles.formItem} placeholder={input.name} {...input}/>
        );
    }



    render(){
        return (<div className={styles.register}>
                <div className={styles.registerTitle}>Register</div>
                <form className={styles.registerForm} onSubmit={this.props.handleSubmit}>
                    <Field name='Email' component={this.renderField} type='text'/>
                    <Field name='Login' component={this.renderField} type='text'/>
                    <Field name='Password' component={this.renderField} type='password' validate={passwordValidate}/>
                    <button><Link to='/'>Go</Link></button>
                </form>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if(values.Email && values.Email.length < 5) {
        errors.Email = 'this is short';
    }
    console.log(errors);
    return errors;
};

export default RegisterView = reduxForm({
    form:'myform'
})(RegisterView)