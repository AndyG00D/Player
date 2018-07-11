import React from 'react';
import styles from './ChoosePage.css'
import ChooseItemComponent from "./ChooseItemComponent";
import ButtonComponent from "../../shared/Button/ButtonComponent";
import {reduxForm, Field} from 'redux-form';

export function ChoosePageComponent(props){
    const {
        panelList,
        panelType,
        panelItemClick,
        addToPlayList,
        removeFromPlayList,
        selectedTrack,
        previousPage,
        title,
        background
    } = props;

        const panelItems = panelList.map((item) => <ChooseItemComponent panelItem={item}
                                                                        key={item.id}
                                                                        panelItemClick={panelItemClick}
                                                                        addToPlayList = {addToPlayList}
                                                                        removeFromPlayList = {removeFromPlayList}
                                                                        panelType={panelType}
                                                                        selectedTrack = {selectedTrack}/>);
        return (
            <div className={styles.choose_page}>
                {panelType !== 'Genres' && <ButtonComponent type={'return'} previousPage = {previousPage}/>}
                <div className={styles.title}>
                    {title}
                    <form className={styles.search} onSubmit={props.handleSubmit}>
                        <Field name='search' component='input' type='text'/>
                        <input type='image' src={require('../../shared/imgs/search.png')}/>
                    </form>
                </div>
                <div className={styles.panel}>
                    {panelItems}
                </div>
                { background && <img className={styles.title_bkg} src={background}/>}
            </div>
        );
}

export default ChoosePageComponent = reduxForm({
    form:'myform'
})(ChoosePageComponent)