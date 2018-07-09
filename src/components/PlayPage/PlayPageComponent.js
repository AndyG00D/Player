import React from 'react';
import styles from './PlayPage.css'
import cx from 'classnames';

export default function PlayPageComponent(props){
    const {
        img,
        preview,
        name,
        title,
        progress,
        onTimeUpdate,
        onPlay,
        onPause,
        previousTrack,
        nextTrack,
        playButton,
        pauseButton,
        audio
    } = props;

    return (
        <div className={styles.play_page}>
            { img ?
                <img className={styles.play_img} src={img}/> :
                <img className={styles.play_img} src={'https://img.etsystatic.com/il/2d8dd1/1185496039/il_fullxfull.1185496039_gqk0.jpg?version=0'}/>}
            <div className={styles.progressBar}>
                <div className={styles.trackProgress} style={{width: `${progress}%`}}></div>
            </div>
            <audio src={preview} onTimeUpdate={onTimeUpdate.bind(this)} onEnded={nextTrack.bind(this)} autoPlay ref={audio}></audio>

            <button className={cx(styles.playPageButton, styles.startButton)} id='startButton'></button>
            <button className={cx(styles.playPageButton, styles.playButton, styles.hidden)} onClick={onPlay.bind(this)} id='playButton' ref={playButton}></button>
            <button className={cx(styles.playPageButton, styles.pauseButton, styles.hidden)}  onClick={onPause.bind(this)} id='pauseButton' ref = {pauseButton}></button>
            {title &&
            <div className={styles.buttonsCover}>
                <button className={cx(styles.playPageButton, styles.previousButton)}
                        onClick={previousTrack.bind(this)}></button>
                <button className={cx(styles.playPageButton, styles.nextButton)}
                        onClick={nextTrack.bind(this)}></button>
            </div>
            }
            <div className={styles.trackTitle}>{title}</div>
            {name && <div className={styles.line}></div>}
            <div className={styles.artistName}>{name}</div>

        </div>
    );
}