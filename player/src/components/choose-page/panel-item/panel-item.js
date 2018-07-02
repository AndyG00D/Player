import React from 'react';
import PanelItemView from "./panel-item-view/panel-item-view";
import AlbumItemView from "./album-item-view/album-item-view";
import TrackItemView from "./track-item-view/track-item-view";

export default class PanelItem extends React.Component{

    constructor(props){
        super(props);

    }

    panelItemClick = (id) => {
        return () => {
            this.props.panelItemClick(id);
        }
    };

    trackItemClick = (id) => {
        return () => {
            this.props.trackItemClick(id);
        }
    };




    render() {
        if (this.props.panelType=='Albums'){
            return (
                <AlbumItemView panelItem={this.props.panelItem} panelItemClick = {this.panelItemClick}/>
            );
        }
        else if (this.props.panelType=='Tracks'){
            return (
                <TrackItemView panelItem={this.props.panelItem} trackItemClick = {this.trackItemClick}/>
            );
        }
        else return (
            <PanelItemView panelItem={this.props.panelItem} panelItemClick = {this.panelItemClick}/>
        );
    }
}