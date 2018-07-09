import React from 'react';
import PlayPageComponent from "../components/PlayPage/PlayPageComponent";
import {connect} from "react-redux";
import {fetchPanelList} from "../actions/fetchPanelList";
import {fetchSelectedTrack} from "../actions/fetchSelectedTrack";
import {fetchSelectedItem} from "../actions/fetchSelectedItem";



export class PlayPageContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {progress:0};
        this.playButton = React.createRef();
        this.pauseButton = React.createRef();
        this.audio = React.createRef();
    }

    onTimeUpdate = ()=> {
            let update = (this.audio.current.currentTime * 100) / this.audio.current.duration;
            this.setState({ progress: update });
    };

    onPlay=()=> {
        this.audio.current.play();
        this.playButton.current.style.display = 'none';
        this.pauseButton.current.style.display = 'block';
    };

    onPause=()=> {
        this.audio.current.pause();
        this.pauseButton.current.style.display = 'none';
        this.playButton.current.style.display = 'block';
    };

    previousTrack = () =>{
        let track = Array.prototype.find.call(this.props.panelList.list, (track)=>track.id==this.props.selectedTrack);
        let newTrack = Array.prototype.find.call(this.props.panelList.list, (t)=>t.track_position==track.track_position-1);
        if(newTrack) this.props.fetchSelectedTrack(newTrack.id);
    };

    nextTrack = () => {
        let track = Array.prototype.find.call(this.props.panelList.list, (track)=>track.id==this.props.selectedTrack);
        let newTrack = Array.prototype.find.call(this.props.panelList.list, (t)=>t.track_position==track.track_position+1);
        if(newTrack) this.props.fetchSelectedTrack(newTrack.id);
    };

    render() {
        let track = Array.prototype.find.call(this.props.panelList.list, (track)=>track.id==this.props.selectedTrack);

        return (
            track ?
            <PlayPageComponent
                img = {this.props.selectedItem.item.cover_xl}
                preview = {track.preview}
                name = {track.artist.name}
                title = {track.title_short}
                progress = {this.state.progress}
                onTimeUpdate = {this.onTimeUpdate}
                onPlay = {this.onPlay}
                onPause = {this.onPause}
                previousTrack = {this.previousTrack}
                nextTrack = {this.nextTrack}
                playButton = {this.playButton}
                pauseButton = {this.pauseButton}
                audio = {this.audio}
            /> :
                <PlayPageComponent
                    img = {''}
                    preview = {''}
                    name = {''}
                    title = {''}
                    progress = {this.state.progress}
                    onTimeUpdate = {this.onTimeUpdate}
                    onPlay = {this.onPlay}
                    onPause = {this.onPause}
                    previousTrack = {this.previousTrack}
                    nextTrack = {this.nextTrack}
                    playButton = {this.playButton}
                    pauseButton = {this.pauseButton}
                    audio = {this.audio}
                />
        );
    }
}

function selectedTrackChange(){
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('playButton').style.display = 'none';
    document.getElementById('pauseButton').style.display = 'block';
    if(document.getElementsByTagName('audio')[0].outerHTML.src) document.getElementsByTagName('audio')[0].play();
}

const mapStateToProps = store => {
    const {panelList, selectedTrack, selectedItem} = store;
    if(selectedTrack) selectedTrackChange();
    return {
        panelList,
        selectedTrack,
        selectedItem
    }
};

export default connect(mapStateToProps, {
    fetchPanelList,
    fetchSelectedTrack,
    fetchSelectedItem
})(PlayPageContainer)