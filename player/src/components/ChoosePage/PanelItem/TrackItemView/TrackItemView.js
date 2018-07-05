import React from 'react';
import './TrackItem.css'

export default function TrackItemView(props){
    return (
        <div className='track_item' onClick={props.trackItemClick(props.panelItem.id)}>
            <div className='disk_cover'><div className='disk'></div></div>
            <div className='track_inf'>
                {props.panelItem.title}
            </div>
            <div className='track_time'>
                {Math.floor(props.panelItem.duration/ 60)} : {props.panelItem.duration % 60}
            </div>
            <div className='track_bkg'></div>
        </div>
    );
}