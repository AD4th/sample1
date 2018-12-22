export const setLatitudeOfCenter = (latitude) => (
    {
        type: 'SET_LATITUDE_CENTER',
        latitude,
    }
);

export const setLongitudeOfCenter = (longitude) => (
    {
        type: 'SET_LONGITUDE_CENTER',
        longitude,
    }
);


export const initGeoLocation = () => (dispatch, getState) => {

    if (!navigator.geolocation){
        alert('Your browser does not support Geolocation')
        return;
    }

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        dispatch(setLatitudeOfCenter(latitude))
        dispatch(setLongitudeOfCenter(longitude))
    }

    const error = () => {
        alert(`can not find position`);
        return;
    }

    navigator.geolocation.getCurrentPosition(success, error);

};
