import cx from "classnames";
import styles from './Disk.css'
import React from 'react';


export default function DiskComponent(props){
    const {
        type
    } = props;

    return (
        type ==='track' &&   <div className={styles.disk}></div> ||
        type ==='selectedTrack' &&   <div className={cx(styles.disk, styles.disk_white, styles["sk-spinner-pulse"])}></div> ||
        type ==='preloader' &&   <div className={cx(styles.preloader, styles["sk-spinner-pulse"])}></div> ||
        null
        );
}
