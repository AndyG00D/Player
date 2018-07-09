import React from 'react';
import styles from './TrackItem.css'
import cx from 'classnames';

export default function TrackItemComponent(props){
    const {
        id,
        title,
        duration,
        panelItemClick,
        selected
    } = props;

    return (
        selected ?
        <div className={styles.track_item} onClick={panelItemClick.bind(this, id)}>
            <div className={styles.disk_cover}><div className={cx(styles.disk, styles.disk_c, styles["sk-spinner-pulse"])}></div></div>
            <div className={cx(styles.track_inf, styles.toWhite_c)}>{title}</div>
            <div className={cx(styles.track_time, styles.toWhite_c)}>{Math.floor(duration/ 60)} : {duration % 60}</div>
            <div className={cx(styles.track_bkg, styles.track_bkg_c)}></div>
        </div> :
            <div className={styles.track_item} onClick={panelItemClick.bind(this, id)}>
                <div className={styles.disk_cover}><div className={styles.disk}></div></div>
                <div className={styles.track_inf}>{title}</div>
                <div className={styles.track_time}>{Math.floor(duration/ 60)} : {duration % 60}</div>
                <div className={styles.track_bkg}></div>
            </div>

    );
}