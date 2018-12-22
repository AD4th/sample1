import {Map} from 'immutable';

const initialState = Map({
    latitude: 0,
    longitude: 0,
    zoom: 15,
});

const mapReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_LATITUDE_CENTER':
            return state.set('latitude', action.latitude);
        case 'SET_LONGITUDE_CENTER':
            return state.set('longitude', action.longitude);
        default:
            return state;
    }
};

export default mapReducer;

