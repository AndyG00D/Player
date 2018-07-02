import React from 'react';
import '../panel-item-view/panel-item.css'

export default function AlbumItemView(props){
    return (
        <div className='panel_item' onClick={props.panelItemClick(props.panelItem.id)}>
            <img className='item_img' src={props.panelItem.cover_medium}/>
            <div className='item_footer'>
                {props.panelItem.title}
            </div>
        </div>
    );
}