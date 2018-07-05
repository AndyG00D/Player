import React from 'react';
import PlayPageView from "./PlayPageView";

export default class PlayPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {progress:0};
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
            document.getElementById('startButton').classList.add('hidden');
            document.getElementById('pauseButton').classList.remove('hidden');
        }
    };

    onPlay=()=> {
        this.audio.play();
        document.getElementById('playButton').classList.add('hidden');
        document.getElementById('pauseButton').classList.remove('hidden');
    };

    onPause=()=> {
    this.audio.pause();
        document.getElementById('pauseButton').classList.add('hidden');
        document.getElementById('playButton').classList.remove('hidden');
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