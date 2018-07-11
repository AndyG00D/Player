import React from 'react';
import PanelItemComponent from "./PanelItem/PanelItemComponent";
import TrackItemComponent from "./TrackItem/TrackItemComponent";

export default function ChooseItemComponent(props){
    const {
        panelItem,
        panelType,
        panelItemClick,
        addToPlayList,
        removeFromPlayList,
        selectedTrack
    } = props;

    let selected = selectedTrack==panelItem.id ? true : false;

            return ( panelType === 'Tracks' || panelType === 'Search' ?
            <TrackItemComponent id = {panelItem.id}
                                title={panelItem.title}
                                panelItemClick = {panelItemClick}
                                addToPlayList = {addToPlayList}
                                removeFromPlayList = {removeFromPlayList}
                                selected = {selected}/> :
                    <PanelItemComponent id = {panelItem.id}
                                        name = {panelItem.name}
                                        title = {panelItem.title}
                                        picture_medium = {panelItem.picture_medium}
                                        cover_medium = {panelItem.cover_medium}
                                        panelItemClick = {panelItemClick}/>
            );
}