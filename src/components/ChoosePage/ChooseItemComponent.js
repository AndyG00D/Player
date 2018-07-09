import React from 'react';
import PanelItemComponent from "./PanelItem/PanelItemComponent";
import TrackItemComponent from "./TrackItem/TrackItemComponent";

export default function ChooseItemComponent(props){
    const {
        panelItem,
        panelType,
        panelItemClick,
        selectedTrack
    } = props;

    let selected = selectedTrack==panelItem.id ? true : false;

            return ( panelType === 'Tracks' ?
            <TrackItemComponent id = {panelItem.id}
                                title={panelItem.title}
                                duration={panelItem.duration}
                                panelItemClick = {panelItemClick}
                                selected = {selected}/> :
                    <PanelItemComponent id = {panelItem.id}
                                        name = {panelItem.name}
                                        title = {panelItem.title}
                                        picture_medium = {panelItem.picture_medium}
                                        cover_medium = {panelItem.cover_medium}
                                        panelItemClick = {panelItemClick}/>
            );
}