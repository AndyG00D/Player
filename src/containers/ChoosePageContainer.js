import React from 'react';
import ChoosePageComponent from "../components/Player/ChoosePage/ChoosePageView";



export default class ChoosePageContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {panelType:'', id:''};
    }

    getGenres(){

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

