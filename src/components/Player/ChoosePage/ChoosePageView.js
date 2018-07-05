import React from 'react';
import styles from './ChoosePage.css'
import PanelItem from "./PanelItem/PanelItem";

export default function ChoosePageView(props){
    console.log(props.panelList);
    if(props.panelList) {
        const panelItems = props.panelList.map((item) => <PanelItem panelItem={item}
                                                                    panelItemClick={props.panelItemClick}
                                                                    trackItemClick={props.trackItemClick}
                                                                    panelType={props.panelType}/>);
        if (props.panelTitle.cover_xl) props.panelTitle.picture_xl = props.panelTitle.cover_xl;
        return (
            <div className={styles.choose_page}>
                <div className={styles.title}>
                    {props.panelTitle.name}{props.panelTitle.title}
                </div>
                <div className={styles.panel}>
                    {panelItems}
                </div>
                <img className={styles.title_bkg} src={props.panelTitle.picture_xl}/>
            </div>
        );
    }
}