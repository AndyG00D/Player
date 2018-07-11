import React, { Component } from 'react';
import styles from './App.css';
import RegisterComponent from "./components/Sign/RegisterComponent";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PlayerComponent from "./components/Player/PlayerComponent";
import HeaderComponent from "./shared/Header/HeaderComponent";
import {AuthContainer} from "./containers/AuthContainer";





export default class App extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
        <BrowserRouter>
        <div className={styles.main}>
            <HeaderComponent/>
      <div className={styles.body}>
          <Switch>
          <Route exact path='/' component={PlayerComponent}/>
          <Route path='/register' component={RegisterComponent}/>
          <Route path='/auth' component={AuthContainer}/>
          </Switch>
      </div>
            <img className={styles.background} src='https://img.etsystatic.com/il/2d8dd1/1185496039/il_fullxfull.1185496039_gqk0.jpg?version=0'/>
        </div>
        </BrowserRouter>
    );
  }
}


