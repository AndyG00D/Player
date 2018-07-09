import React from 'react';
import styles from './ChoosePage.css'
import ChooseItemComponent from "./ChooseItemComponent";

export default function ChoosePageComponent(props){
    const {
        panelList,
        panelType,
        panelTitle,
        panelItemClick,
        selectedTrack
    } = props;

        const title = panelTitle.name || panelTitle.title || 'Genres';
        const img = panelTitle.picture_xl || panelTitle.cover_xl;
        const panelItems = panelList.map((item) => <ChooseItemComponent panelItem={item}
                                                                        key={item.id}
                                                                        panelItemClick={panelItemClick}
                                                                        panelType={panelType}
                                                                        selectedTrack = {selectedTrack}/>);
        return (
            <div className={styles.choose_page}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.panel}>
                    {panelItems}
                </div>
                <img className={styles.title_bkg} src={img}/>
            </div>
        );
}