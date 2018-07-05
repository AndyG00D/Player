import React, { Component } from 'react';
import styles from './App.css';
import HeaderView from "./shared/Header/HeaderView";
import Player from "./components/Player/Player";
import RegisterView from "./components/Register/RegisterView";
import {BrowserRouter, Route} from 'react-router-dom';


export default class App extends React.Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
        <BrowserRouter>
        <div className={styles.main}>
            <HeaderView/>
      <div className={styles.body}>
          <Route exact path='/' component={Player}/>
          <Route path='/register' component={RegisterView}/>
      </div>
            <img className={styles.background} src='https://img.etsystatic.com/il/2d8dd1/1185496039/il_fullxfull.1185496039_gqk0.jpg?version=0'/>
        </div>
        </BrowserRouter>
    );
  }
}


