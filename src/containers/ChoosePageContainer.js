import React from 'react';
import {connect} from 'react-redux';
import {fetchPanelList} from '../actions/fetchPanelList';
import {fetchSelectedItem} from '../actions/fetchSelectedItem';
import {fetchSelectedTrack} from '../actions/fetchSelectedTrack';
import {clearSelectedItem} from '../actions/clearSelectedItem';
import ChoosePageComponent from "../components/ChoosePage/ChoosePageComponent";
import {ApiUrls} from "../core/api-urls";
import DiskComponent from "../shared/Disk/DiskComponent";

export class ChoosePageContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {panelType:'',  id:[], searchTitle:''};
    }

    componentDidMount(){this.getGenres();}

    getGenres(){
        this.props.fetchPanelList(ApiUrls.genre);
        if(!this.props.panelList.errors) this.setState({panelType: 'Genres'});
    }

    getArtists(){
        let id = this.state.id[this.state.id.length-1];
        Promise.all([
            this.props.fetchSelectedItem(`${ApiUrls.genre}${id}`),
            this.props.fetchPanelList(`${ApiUrls.genre}${id}/artists`)
        ])
        .then(() => this.setState({panelType: 'Artists'}));
    }

    getAlbums(){
        let id = this.state.id[this.state.id.length-1];
        Promise.all([
            this.props.fetchSelectedItem(`${ApiUrls.artist}${id}`),
            this.props.fetchPanelList(`${ApiUrls.artist}${id}/albums`)
        ])
        .then(() => this.setState({panelType: 'Albums'}));
    }

    getTracks(){
        let id = this.state.id[this.state.id.length-1];
        Promise.all([
            this.props.fetchSelectedItem(`${ApiUrls.album}${id}`),
            this.props.fetchPanelList(`${ApiUrls.album}${id}/tracks`)
        ])
            .then(() => this.setState({panelType: 'Tracks'}));
    }

    getTrack(){
        let id = this.state.id[this.state.id.length-1];
        this.props.fetchSelectedTrack(id);
        let idArray = this.state.id.slice(0, this.state.id.length-1);
        this.setState({id: [...idArray]});
    }

    panelItemClick = (id) => {
            this.setState({id: [...this.state.id, id]}, () => {
                if (this.state.panelType === 'Genres') {
                    this.getArtists();
                }
                if (this.state.panelType === 'Artists') {
                    this.getAlbums();
                }
                if (this.state.panelType === 'Albums') {
                    this.getTracks();
                }
                if (this.state.panelType === 'Tracks' || this.state.panelType === 'Search') {
                    this.getTrack();
                }
            });
    };

    previousPage = () => {
        let idArray = this.state.id.slice(0, this.state.id.length-1);

        this.setState({id: [...idArray]}, ()=>{
            if (this.state.panelType === 'Artists') {
                this.props.clearSelectedItem();
                this.getGenres();
            }
            if (this.state.panelType === 'Albums') {
                this.getArtists();
            }
            if (this.state.panelType === 'Tracks') {
                this.props.fetchSelectedTrack(null);
                this.setState({searchTitle:''});
                this.getAlbums();
            }
            if (this.state.panelType === 'Search') {
                this.props.fetchSelectedTrack(null);
                this.setState({searchTitle:''});
                this.props.clearSelectedItem();
                this.getGenres();
            }
        });
    };

    addToPlayList = (id) => {
        console.log(id + 'add');
    };

    removeFromPlayList = (id) => {
        console.log(id + 'remove');
    };

    submitSearch = (values) => {
        this.setState({id: [...this.state.id, 0]}, ()=>{
            this.props.fetchPanelList(`${ApiUrls.search}${values.search}`);
            this.props.clearSelectedItem();
            this.setState({searchTitle: values.search});
            if(!this.props.panelList.errors) this.setState({panelType: 'Search'});
        });
    };

    render() {
               let background = this.props.selectedItem.item.picture_xl ||  this.props.selectedItem.item.cover_xl;
               let title = this.props.selectedItem.item.name || this.props.selectedItem.item.title || this.state.panelType;
               let track = Array.prototype.find.call(this.props.panelList.list, (track)=>track.id==this.props.selectedTrack);
               if(this.state.panelType === 'Search' && this.props.selectedTrack) title = this.state.searchTitle;
               if(track && track.album)  background = track.album.cover_xl;

               return ( this.props.panelList.list.length>0 && this.props.panelList.loading && this.props.selectedItem.loading ?
                     <ChoosePageComponent panelList={this.props.panelList.list}
                                         onSubmit = {this.submitSearch}
                                         panelType={this.state.panelType}
                                         selectedTrack = {this.props.selectedTrack}
                                         panelItemClick={this.panelItemClick}
                                         addToPlayList = {this.addToPlayList}
                                         removeFromPlayList = {this.removeFromPlayList}
                                         previousPage={this.previousPage}
                                         title={title}
                                         background={background}/> :
                    <DiskComponent type='preloader'/>
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
    fetchSelectedTrack,
    clearSelectedItem
})(ChoosePageContainer)