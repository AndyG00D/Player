import React from 'react';
import styles from './PlayPage.css'
import cx from 'classnames';

export default function PlayPageView(props){
    return (
        <div className={styles.play_page}>
            <img className={styles.play_img} src={props.track.album.cover_big}/>
            <div className={styles.progressBar}>
                <div className={styles.trackProgress} style={{width: `${props.progress}%`}}></div>
            </div>
            <audio src={props.track.preview} onTimeUpdate={props.onTimeUpdate}></audio>

            <div className={cx(styles.playPageButton, styles.startButton)} onClick={props.onStart} id='startButton'></div>
            <button className={cx(styles.playPageButton, styles.playButton, styles.hidden)} onClick={props.onPlay} id='playButton'></button>
            <button className={cx(styles.playPageButton, styles.pauseButton, styles.hidden)}  onClick={props.onPause} id='pauseButton'></button>

        </div>
    );
}