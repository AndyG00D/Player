import React from 'react';
import styles from './Register.css'
import cx from 'classnames';
import {Link} from 'react-router-dom';

export default function RegisterView(props){

    return (
        <div className={styles.register}>
            <div className={styles.registerTitle}>Register</div>
            <form className={styles.registerForm}>
                <input className={styles.formItem} type="text" placeholder='Email'/>
                <input className={styles.formItem}  type="text" placeholder='Login'/>
                <input className={styles.formItem}  type="password" placeholder='Password'/>
                <div className={cx(styles.formItem, styles.container)} >
                <select>
                    <option selected>Gender</option>
                    <option>Man</option>
                    <option>Woman</option>
                </select>
                <input className={styles.formItem} type="number" placeholder='Age'/>
                </div>

                <button><Link to='/'>Go</Link></button>
            </form>
        </div>
    );
}