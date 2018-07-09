import React from 'react';
import styles from './PanelItem.css'

export default function PanelItemComponent(props){
    const {
        id,
        name,
        title,
        picture_medium,
        cover_medium,
        panelItemClick
    } = props;

    const footer = name || title;
    const img = picture_medium || cover_medium;

    return (
        <div className={styles.panel_item} onClick={panelItemClick.bind(this,id)}>
            <img className={styles.item_img} src={img}/>
            <div className={styles.item_footer}>
                <label className={styles.footer_text}>{footer}</label>
            </div>
        </div>
    );
}