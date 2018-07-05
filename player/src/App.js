import React, { Component } from 'react';
import './App.css';
import PlayPageView from "./components/PlayPage/PlayPageView";
import ChoosePage from "./components/ChoosePage/ChoosePage";
import axios from "axios/index";
import PlayPage from "./components/PlayPage/PlayPage";
import HeaderView from "./shared/Header/HeaderView";


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
        <div className='main'>
            <HeaderView/>
      <div className="body">
        <div className='player'>
         <PlayPage track = {this.state.track}/>
         <ChoosePage trackItemClick = {this.trackItemClick}/>
        </div>
      </div>
            <img className='background' src='https://img.etsystatic.com/il/2d8dd1/1185496039/il_fullxfull.1185496039_gqk0.jpg?version=0'/>
        </div>
    );
  }
}


