import React from 'react';
import PlayPageView from "./play-page-view";

export default class PlayPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {progress:522};
        this.audio = '';
    }

    componentDidMount(){
        this.audio = document.getElementsByTagName('audio')[0];
    }

    onTimeUpdate =
        ()=> {
            let update = (this.audio.currentTime * 100) / this.audio.duration;
            this.setState({
                progress: update
            });
        };



    onStart =()=> {
        if(this.props.track.preview) {
            this.audio.play();
            this.setState({
                progress: 0
            });
            document.getElementsByClassName('startButton')[0].classList.add('hidden');
            document.getElementsByClassName('pauseButton')[0].classList.remove('hidden');
        }
    };

    onPlay=()=> {
        this.audio.play();
        document.getElementsByClassName('playButton')[0].classList.add('hidden');
        document.getElementsByClassName('pauseButton')[0].classList.remove('hidden');
    };

    onPause=()=> {
    this.audio.pause();
        document.getElementsByClassName('pauseButton')[0].classList.add('hidden');
        document.getElementsByClassName('playButton')[0].classList.remove('hidden');
    };


    render() {
        return (
            <PlayPageView
                track={this.props.track}
                progress = {this.state.progress}
                onTimeUpdate = {this.onTimeUpdate.bind(this)}
                onStart = {this.onStart.bind(this)}
                onPlay = {this.onPlay.bind(this)}
                onPause = {this.onPause.bind(this)}
            />
        );
    }
}