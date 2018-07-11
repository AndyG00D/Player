import panelList from "./panelList";
import selectedItem from "./selectedItem";
import selectedTrack from "./selectedTrack";
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    panelList,
    selectedItem,
    selectedTrack,
    form: formReducer
});