import React from 'react';
import axios from 'axios';
import ChoosePageView from "./choose-page-view";

export default class ChoosePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {panelList:[], inquiries:[], panelType:'', panelTitle:{}, id:''};
    }

    componentDidMount(){this.getGenres();}

    getGenres(){
        axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
            .then((response)=>{
                this.setState({panelList:response.data.data, panelType: 'Genres', panelTitle:{name:'Genres'}});
            });

        this.state.inquiries.push('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre');
    }

    getArtists(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${this.state.id}`)
            .then((response)=>{
                this.setState({panelTitle:response.data});
            });


        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${this.state.id}/artists`)
            .then((response)=>{
                this.setState({panelList:response.data.data, panelType: 'Artists'});
            });

        this.state.inquiries.push(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${this.state.id}/artists`);
    }

    getAlbums(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${this.state.id}`)
            .then((response)=>{
                this.setState({panelTitle:response.data});
            });

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${this.state.id}/albums`)
            .then((response)=>{
                this.setState({panelList:response.data.data, panelType: 'Albums'});
            });

        this.state.inquiries.push(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${this.state.id}/albums`);
    }

    getTracks(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${this.state.id}`)
            .then((response)=>{
                this.setState({panelTitle:response.data});
            });

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${this.state.id}/tracks`)
            .then((response)=>{
                this.setState({panelList:response.data.data, panelType: 'Tracks'});
            });

        this.state.inquiries.push(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${this.state.id}/tracks`);
    }

    panelItemClick = (id) => {
           this.state.id=id;
            if(this.state.panelType=='Genres') {
                this.getArtists();
            }
            if(this.state.panelType == 'Artists') {
                this.getAlbums();
            }
            if(this.state.panelType == 'Albums') {
                this.getTracks();
            }
        };

    trackItemClick= (id) => this.props.trackItemClick(id);


    render() {
        console.log(this.state.panelType);
        return (
            <ChoosePageView panelList={this.state.panelList} panelType={this.state.panelType} panelItemClick = {this.panelItemClick} trackItemClick = {this.trackItemClick} panelTitle={this.state.panelTitle}/>
        );
    }
}