import React from 'react';
import styles from './PanelItem.css'

export default function PanelItemView(props){
    if(props.panelItem.title) props.panelItem.name = props.panelItem.title;
    if(props.panelItem.cover_medium) props.panelItem.picture_medium = props.panelItem.cover_medium;
    return (
        <div className={styles.panel_item} onClick={props.panelItemClick(props.panelItem.id)}>
            <img className={styles.item_img} src={props.panelItem.picture_medium}/>
            <div className={styles.item_footer}>
                {props.panelItem.name}
            </div>
        </div>
    );
}