import React from 'react';
import styles from './Button.css'
import cx from "classnames";

export default function ButtonComponent(props){
    const {
        type,
        playButton,
        pauseButton,
        onPlay,
        onPause,
        previousTrack,
        nextTrack,
        previousPage
    } = props;

    return (
        type ==='start' &&  <button className={cx(styles.playerButton, styles.playLineButton, styles.startButton)} id='startButton'></button> ||
        type ==='play' &&  <button className={cx(styles.playerButton, styles.playLineButton, styles.playButton, styles.hidden)} id='playButton' ref={playButton} onClick={onPlay.bind(this)}></button> ||
        type ==='pause' &&  <button className={cx(styles.playerButton, styles.playLineButton, styles.pauseButton)} id='pauseButton' ref={pauseButton} onClick={onPause.bind(this)}></button> ||
        type ==='previousTrack' &&  <button className={cx(styles.playerButton, styles.changeTrackButton, styles.previousTrackButton)} onClick={previousTrack.bind(this)}></button> ||
        type ==='nextTrack' &&  <button className={cx(styles.playerButton, styles.changeTrackButton, styles.nextTrackButton)} onClick={nextTrack.bind(this)}></button> ||
        type ==='return' &&  <button className={cx(styles.playerButton, styles.returnButton)} onClick={previousPage.bind(this)}></button> ||
        false
    );
}