import React from 'react';
import styles from './Register.css'
import {Link} from 'react-router-dom';

export default function RegisterComponent(props){

    return (
        <div className={styles.register}>
            <div className={styles.title}>
                Registration
            </div>
            <form className={styles.registerForm}>
                <input className={styles.formItem} type="text" placeholder='Email'/>
                <input className={styles.formItem}  type="text" placeholder='Login'/>
                <input className={styles.formItem}  type="password" placeholder='Password'/>
                <button className={styles.button}><Link className={styles.link} to='/'>Sign Up</Link></button>
            </form>
        </div>
    );
}