import React, { Component } from 'react';
import styles from './App.css';
import HeaderView from "./shared/Header/HeaderView";
import Player from "./components/Player/Player";
import Register from "./components/Register/Register";
import {BrowserRouter, Route} from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));


export default class App extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
        <Provider store = {store}>
        <BrowserRouter>
        <div className={styles.main}>
            <HeaderView/>
      <div className={styles.body}>
          <Route exact path='/' component={Player}/>
          <Route path='/register' component={Register}/>
      </div>
            <img className={styles.background} src='https://img.etsystatic.com/il/2d8dd1/1185496039/il_fullxfull.1185496039_gqk0.jpg?version=0'/>
        </div>
        </BrowserRouter>
        </Provider>
    );
  }
}


