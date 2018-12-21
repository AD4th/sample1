import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {geolocated} from 'react-geolocated';
import _ from 'lodash';

class GoogleMap extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.isGeolocationAvailable) {
            alert('Your browser does not support Geolocation')
        } else if (!this.props.isGeolocationEnabled) {
            alert('Geolocation is not enabled')
        }
    }

    render() {

        console.log(this.props);

        const latitude = _.get(this.props.coords, 'latitude', 37.375248299999996);
        const longitude = _.get(this.props.coords, 'longitude',  127.14058120000001);
        const zoom = 11;

        return(
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCAZKhzZjsn_h_LTh8P7_wwYX2DslInOKU' }}
                    defaultCenter={{
                        lat: latitude,
                        lng: longitude,
                    }}
                    defaultZoom={zoom}
                >
                </GoogleMapReact>
            </div>
        )
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GoogleMap);
