import React from 'react';
import styles from './TrackItem.css'
import cx from 'classnames';
import DiskComponent from "../../../shared/Disk/DiskComponent";

export default function TrackItemComponent(props){
    const {
        id,
        title,
        panelItemClick,
        addToPlayList,
        removeFromPlayList,
        selected
    } = props;



    return (
        selected ?
        <div className={styles.track_item} onClick={panelItemClick.bind(this, id)}>
            <div className={styles.disk_cover}><DiskComponent type={'selectedTrack'}/></div>
            <div className={cx(styles.track_inf, styles.toWhite_c)}>{title}</div>
            {true ?
                <div className={cx(styles.like, styles.whiteLike)} onClick={removeFromPlayList.bind(this,id)}></div> :
                <div className={cx(styles.like, styles.whiteHeart)} onClick={addToPlayList.bind(this,id)}></div>}
            <div className={cx(styles.track_bkg, styles.track_bkg_c)}></div>
        </div> :
            <div className={styles.track_item} onClick={panelItemClick.bind(this, id)}>
                <div className={styles.disk_cover}><DiskComponent type={'track'}/></div>
                <div className={styles.track_inf}>{title}</div>
                {false ?
                    <div className={cx(styles.like, styles.greyLike)} onClick={removeFromPlayList.bind(this,id)}></div> :
                    <div className={cx(styles.like, styles.greyHeart)} onClick={addToPlayList.bind(this,id)}></div>}
                <div className={styles.track_bkg}></div>
            </div>

    );
}