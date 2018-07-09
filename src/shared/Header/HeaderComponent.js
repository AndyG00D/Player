import React from 'react';
import styles from './Header.css'
import {Link} from 'react-router-dom';

export default function HeaderComponent(props){

    return (
         <ul className={styles.header}>
             <Link  to='/register' className={styles.headerItem}>Sign Up</Link>
             <Link to='/auth' className={styles.headerItem}>Sign In</Link>
         </ul>
    );
}