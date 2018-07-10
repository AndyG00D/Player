import React from 'react';
import styles from './Register.css'
import {Link} from 'react-router-dom';
import cx from 'classnames';

export default function AuthComponent(props){
    const {
        signInClick
    } = props;

    return (
        <div className={cx(styles.register, styles.auth)}>
            <div className={cx(styles.title, styles.title_auth)}>
                Authorization
            </div>
            <form className={cx(styles.registerForm, styles.form_auth)}>
                <input className={styles.formItem} type="text" placeholder='Email'/>
                <input className={styles.formItem}  type="password" placeholder='Password'/>
                <button className={styles.button} onClick={signInClick.bind(this)}><Link className={styles.link} to='/'>Sign In</Link></button>
            </form>
        </div>
    );
}