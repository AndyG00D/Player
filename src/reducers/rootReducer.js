import fetchPanelList from "./fetchPanelList";
import fetchSelectedItem from "./fetchSelectedItem";
import fetchSelectedTrack from "./fetchSelectedTrack";


const initialState = {
    panelList: {list:{}, isLoading:false, errors:null},
    selectedItem: {item:{}, isLoading:false, errors:null},
    selectedTrack: undefined
};


export default  function (state = initialState, action){
    console.log(action.type);
    return {
        ...state,
        panelList: fetchPanelList(state.panelList, action),
        selectedItem: fetchSelectedItem(state.selectedItem, action),
        selectedTrack: fetchSelectedTrack(state.selectedTrack, action)
    };
}