import React from 'react';
import './PanelItem.css'

export default function PanelItemView(props){
    if(props.panelItem.title) props.panelItem.name = props.panelItem.title;
    if(props.panelItem.cover_medium) props.panelItem.picture_medium = props.panelItem.cover_medium;
    return (
        <div className='panel_item' onClick={props.panelItemClick(props.panelItem.id)}>
            <img className='item_img' src={props.panelItem.picture_medium}/>
            <div className='item_footer'>
                {props.panelItem.name}
            </div>
        </div>
    );
}