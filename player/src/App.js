import React, { Component } from 'react';
import './App.css';
import PlayPageView from "./components/play-page/play-page-view";
import ChoosePage from "./components/choose-page/choose-page";
import axios from "axios/index";
import PlayPage from "./components/play-page/play-page";

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {track:{album:{cover_big:'https://img.etsystatic.com/il/2d8dd1/1185496039/il_fullxfull.1185496039_gqk0.jpg?version=0'}}};
    }

    trackItemClick= (id) => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
            .then((response)=>{
                debugger;
                this.setState({track:response.data});
                console.log(this.state.track);
            });
 };

  render() {
    return (
      <div className="App">
        <div className='player'>
         <PlayPage track = {this.state.track}/>
         <ChoosePage trackItemClick = {this.trackItemClick}/>
        </div>
          <img className='background' src='https://img.etsystatic.com/il/2d8dd1/1185496039/il_fullxfull.1185496039_gqk0.jpg?version=0'/>
      </div>
    );
  }
}


