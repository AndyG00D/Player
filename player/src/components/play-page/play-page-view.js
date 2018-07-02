import React from 'react';
import './play-page.css'

export default function PlayPageView(props){
    return (
        <div className='play_page'>
            <img className='play_img' src={props.track.album.cover_big}/>
            <div className='progressBar'>
                <div className='trackProgress' style={{width: props.progress}}></div>
            </div>
            <audio src={props.track.preview} onTimeUpdate={props.onTimeUpdate}></audio>
            <div className='startButton' onClick={props.onStart}></div>
            <button className='playButton hidden' onClick={props.onPlay}></button>
            <button className='pauseButton hidden'  onClick={props.onPause}></button>

        </div>
    );
}