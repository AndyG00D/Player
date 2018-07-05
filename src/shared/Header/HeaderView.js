import React from 'react';
import styles from './Header.css'
import {Link} from 'react-router-dom';

export default function HeaderView(props){

    return (
         <ul className={styles.header}>
             <Link  to='/register' className={styles.headerItem}>Sign Up</Link>
             <li className={styles.headerItem}>Sign In</li>
         </ul>
    );
}