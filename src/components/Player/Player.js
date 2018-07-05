import React from "react";
import axios from "axios/index";
import PlayerView from "./PlayerView";

export default class Player extends React.Component {

    constructor(props){
        super(props);
        this.state = {track:{album:{cover_big:'https://img.etsystatic.com/il/2d8dd1/1185496039/il_fullxfull.1185496039_gqk0.jpg?version=0'}}};
    }

    trackItemClick= (id) => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
            .then((response)=>{
                this.setState({track:response.data});
            });
    };

    render() {
        return (
            <PlayerView track = {this.state.track} trackItemClick = {this.trackItemClick}/>
        );
    }
}
