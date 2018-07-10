import React from 'react';
import {connect} from 'react-redux';
import {fetchPanelList} from '../actions/fetchPanelList';
import {fetchSelectedItem} from '../actions/fetchSelectedItem';
import {fetchSelectedTrack} from '../actions/fetchSelectedTrack';
import ChoosePageComponent from "../components/ChoosePage/ChoosePageComponent";
import {ApiUrls} from "../core/api-urls";

export class ChoosePageContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {panelType:'',  id:''};
    }

    componentDidMount(){this.getGenres();}

    getGenres(){
        this.props.fetchPanelList(ApiUrls.genre);
        if(!this.props.panelList.errors) this.setState({panelType: 'Genres'});
    }

    getArtists(){
        Promise.all([
            this.props.fetchSelectedItem(`${ApiUrls.genre}${this.state.id}`),
            this.props.fetchPanelList(`${ApiUrls.genre}${this.state.id}/artists`)
        ])
        .then(() => this.setState({panelType: 'Artists'}));
    }

    getAlbums(){
        Promise.all([
            this.props.fetchSelectedItem(`${ApiUrls.artist}${this.state.id}`),
            this.props.fetchPanelList(`${ApiUrls.artist}${this.state.id}/albums`)
        ])
        .then(() => this.setState({panelType: 'Albums'}));
    }

    getTracks(){
        Promise.all([
            this.props.fetchSelectedItem(`${ApiUrls.album}${this.state.id}`),
            this.props.fetchPanelList(`${ApiUrls.album}${this.state.id}/tracks`)
        ])
            .then(() => this.setState({panelType: 'Tracks'}));
    }

    getTrack(){
        this.props.fetchSelectedTrack(this.state.id);
    }

    panelItemClick = (id) => {
        this.setState({id: id}, ()=>{
            if (this.state.panelType === 'Genres') {
                this.getArtists();
            }
            if (this.state.panelType === 'Artists') {
                this.getAlbums();
            }
            if (this.state.panelType === 'Albums') {
                this.getTracks();
            }
            if (this.state.panelType === 'Tracks') {
                this.getTrack();
            }
        });
    };

    render() {
                return ( this.props.panelList.list.length>0 ?
                    <ChoosePageComponent panelList={this.props.panelList.list}
                                         panelTitle={this.props.selectedItem.item}
                                         panelType={this.state.panelType}
                                         selectedTrack = {this.props.selectedTrack}
                                         panelItemClick={this.panelItemClick}/> : <div></div>
                );
    }
}


const mapStateToProps = store => {
   const {panelList, selectedItem, selectedTrack} = store;
    return {
        panelList,
        selectedItem,
        selectedTrack
    }
};

export default connect(mapStateToProps, {
    fetchPanelList,
    fetchSelectedItem,
    fetchSelectedTrack
})(ChoosePageContainer)