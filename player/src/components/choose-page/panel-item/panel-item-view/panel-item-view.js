import React from 'react';
import './panel-item.css'

export default function PanelItemView(props){
    return (
        <div className='panel_item' onClick={props.panelItemClick(props.panelItem.id)}>
            <img className='item_img' src={props.panelItem.picture_medium}/>
            <div className='item_footer'>
                {props.panelItem.name}
            </div>
        </div>
    );
}