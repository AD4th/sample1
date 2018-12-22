import React, { Component } from 'react';
import { connect, } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { setLongitudeOfCenter, setLatitudeOfCenter, initGeoLocation, } from '../../actions/mapAction';


const CenterComponent = ({ text }) => <div><img width="25" height="25" src="/assets/imgs/places-icon.png" /></div>;
//const CenterComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }

    onChange({center}) {
        const { setLatitudeOfCenter, setLongitudeOfCenter, } = this.props;
        setLatitudeOfCenter(center.lat);
        setLongitudeOfCenter(center.lng);
    }

    componentDidMount() {
        const { initGeoLocation, } = this.props;
        initGeoLocation();
    }

    render() {

        const { latitude, longitude, zoom, } = this.props;

        return(
            <div style={{ height: '100vh', width: '100%', backgroundColor: '#fff' }}>
                { (latitude && longitude )  &&
                    <GoogleMapReact
                        bootstrapURLKeys={{key: 'AIzaSyCAZKhzZjsn_h_LTh8P7_wwYX2DslInOKU'}}
                        defaultCenter={{
                            lat: latitude,
                            lng: longitude,
                        }}
                        defaultZoom={zoom}
                        onChange={this.onChange}
                    >
                        <CenterComponent
                            lat={latitude}
                            lng={longitude}
                            text={"내위치~"}
                        />
                    </GoogleMapReact>
                }
                { !(latitude && longitude ) && `현재 위치를 찾는 중입니다.`}
            </div>
        )
    }
}

export default connect(
    state => ({
        latitude: state.map.get('latitude'),
        longitude: state.map.get('longitude'),
        zoom: state.map.get('zoom'),
    }),
    { setLongitudeOfCenter, setLatitudeOfCenter, initGeoLocation, }
)(GoogleMap);
