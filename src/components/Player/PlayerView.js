import React from 'react';
import styles from './Player.css'
import PlayPage from "./PlayPage/PlayPage";
import ChoosePage from "./ChoosePage/ChoosePage";

export default function PlayerView(props){

    return (
        <div className={styles.player}>
            <PlayPage track = {props.track}/>
            <ChoosePage trackItemClick = {props.trackItemClick}/>
        </div>
    );
}