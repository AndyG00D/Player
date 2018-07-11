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
        let id = Array.prototype.findIndex.call(this.props.panelList.list, (track)=>track.id==this.props.selectedTrack);
        let newTrack = this.props.panelList.list[id-1];
        if(newTrack) this.props.fetchSelectedTrack(newTrack.id);
    };

    nextTrack = () => {
        let id = Array.prototype.findIndex.call(this.props.panelList.list, (track)=>track.id==this.props.selectedTrack);
        let newTrack = this.props.panelList.list[id+1];
        if(newTrack) this.props.fetchSelectedTrack(newTrack.id);
    };

    trackClick = (e) => {
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let currentTime = this.audio.current.duration * x / e.target.clientWidth;
        let update = (currentTime * 100) / this.audio.current.duration;
        this.audio.current.currentTime = currentTime;
        this.setState({ progress: update });
        this.onPlay();
    };

    render() {
        let track = Array.prototype.find.call(this.props.panelList.list, (track)=>track.id==this.props.selectedTrack);
        let img = this.props.selectedItem.item.cover_xl || 'https://img.etsystatic.com/il/2d8dd1/1185496039/il_fullxfull.1185496039_gqk0.jpg?version=0';
        if(track && track.album) img = track.album.cover_xl;
        return (
            this.props.panelList.loading && this.props.selectedItem.loading && track ?
            <PlayPageComponent
                img = {img}
                preview = {track.preview}
                name = {track.artist.name}
                title = {track.title_short}
                progress = {this.state.progress}
                onTimeUpdate = {this.onTimeUpdate}
                onPlay = {this.onPlay}
                onPause = {this.onPause}
                previousTrack = {this.previousTrack}
                nextTrack = {this.nextTrack}
                trackClick = {this.trackClick}
                playButton = {this.playButton}
                pauseButton = {this.pauseButton}
                audio = {this.audio}
            /> :  <PlayPageComponent img={img}/>
        );
    }
}


const mapStateToProps = store => {
    const {panelList, selectedTrack, selectedItem} = store;
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