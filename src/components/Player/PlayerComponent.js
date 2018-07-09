import React from 'react';
import styles from './Player.css'
import PlayPageContainer from "../../containers/PlayPageContainer";
import ChoosePageContainer from "../../containers/ChoosePageContainer";
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from '../../reducers/rootReducer';

const store = createStore(rootReducer, compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));


export default function PlayerComponent(props){
    return (
        <Provider store = {store}>
        <div className={styles.player}>
            <PlayPageContainer/>
            <ChoosePageContainer/>
        </div>
        </Provider>
    );
}