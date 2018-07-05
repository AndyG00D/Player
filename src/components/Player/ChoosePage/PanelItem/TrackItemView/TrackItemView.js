import React from 'react';
import styles from './TrackItem.css'

export default function TrackItemView(props){
    return (
        <div className={styles.track_item} onClick={props.trackItemClick(props.panelItem.id)}>
            <div className={styles.disk_cover}><div className={styles.disk}></div></div>
            <div className={styles.track_inf}>
                {props.panelItem.title}
            </div>
            <div className={styles.track_time}>
                {Math.floor(props.panelItem.duration/ 60)} : {props.panelItem.duration % 60}
            </div>
            <div className={styles.track_bkg}></div>
        </div>
    );
}