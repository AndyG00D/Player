import React from 'react';
import './Header.css'

export default function HeaderView(props){

    return (
         <ul className='header'>
             <li className='headerItem'>Sign Up</li>
             <li className='headerItem'>Sign In</li>
         </ul>
    );
}