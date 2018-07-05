import React from 'react';
import PanelItemView from "./PanelItemView/PanelItemView";
import TrackItemView from "./TrackItemView/TrackItemView";

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
        if (this.props.panelType=='Tracks'){
            return (
                <TrackItemView panelItem={this.props.panelItem} trackItemClick = {this.trackItemClick}/>
            );
        }
        else return (
            <PanelItemView panelItem={this.props.panelItem} panelItemClick = {this.panelItemClick}/>
        );
    }
}