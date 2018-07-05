import React from 'react';
import './ChoosePage.css'
import PanelItem from "./PanelItem/PanelItem";

export default function ChoosePageView(props){
    const panelItems = props.panelList.map((item)=><PanelItem  panelItem={item} panelItemClick = {props.panelItemClick} trackItemClick = {props.trackItemClick} panelType={props.panelType}/>);
    return (
        <div className='choose_page'>
            <div className='title'>
                {props.panelTitle.name}{props.panelTitle.title}
            </div>
            <div className='panel'>
                {panelItems}
            </div>
            <img className='title_bkg' src={props.panelTitle.picture_xl}/>
            <img className='title_bkg' src={props.panelTitle.cover_xl}/>
        </div>
    );
}