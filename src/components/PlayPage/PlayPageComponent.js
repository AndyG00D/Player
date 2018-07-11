import React from 'react';
import styles from './PlayPage.css'
import cx from 'classnames';
import ButtonComponent from "../../shared/Button/ButtonComponent";

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
        trackClick,
        playButton,
        pauseButton,
        audio
    } = props;

    return (
        <div className={styles.play_page}>

            <img className={styles.play_img} src={img}/>
            <div className={styles.progressBar} onClick={trackClick}>
                {preview && <div className={styles.trackProgress} style={{width: `${progress}%`}}></div> }
            </div>

            {preview ? <div className={styles.trackInf_container}>
                <audio src={preview} onTimeUpdate={onTimeUpdate} onEnded={nextTrack} autoPlay ref={audio} onDurationChange={onPlay}></audio>
                <ButtonComponent type={'play'} playButton={playButton} onPlay={onPlay}/>
                <ButtonComponent type={'pause'} pauseButton={pauseButton} onPause={onPause}/>
                <div className={styles.buttonsCover}>
                    <ButtonComponent type={'previousTrack'} previousTrack={previousTrack}/>
                    <ButtonComponent type={'nextTrack'} nextTrack={nextTrack}/>
                </div>
                <div className={styles.trackTitle}>{title}</div>
                {name && <div className={styles.line}></div>}
                <div className={styles.artistName}>{name}</div>
            </div> : <ButtonComponent type={'start'}/>}
        </div>
    );
}