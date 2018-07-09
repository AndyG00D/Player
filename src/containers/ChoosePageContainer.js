import React from 'react';
import {connect} from "react-redux";
import {fetchPanelList} from "../actions/fetchPanelList";
import {fetchSelectedTrack} from "../actions/fetchSelectedTrack";
import {fetchSelectedItem} from "../actions/fetchSelectedItem";
import ChoosePageComponent from "../components/ChoosePage/ChoosePageComponent";



export class ChoosePageContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {panelType:'', id:''};
    }

    getGenres(){
        this.props.fetchPanelList('https://api.deezer.com/genre');
    }

    panelItemClick = (id)=>{
        this.setState({id:id}, ()=>{

        });
    }

    render() {
      return (<ChoosePageComponent panelList = {this.props.panelList}
                                   panelType = {this.state.panelType}
                                   panelTitle = {this.props.selectedItem}
                                   panelItemClick = {this.panelItemClick}
                                   selectedTrack = {this.props.selectedTrack}/>
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
})(ChoosePageContainer)