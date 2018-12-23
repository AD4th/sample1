import React, { Component } from 'react';
import { connect, } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { setLongitudeOfCenter, setLatitudeOfCenter, initGeoLocation, setMakers, } from '../../actions/mapAction';


const CenterComponent = ({ text }) => <div><img width="25" height="25" src="/assets/imgs/places-icon.png" /></div>;
//const CenterComponent = ({ text }) => <div>{text}</div>;

const ContentComponent = ({ text, thumbnail }) => (
    <div style={{
        width: '150px',
        height: '50px',
        border: '1px solid #ddd',
        backgroundColor: '#fff'
    }}><img width="25" height="25" src={thumbnail} />{text}</div>
);

const mocks = [
    {
        content: '11111111111111',
        lat: 37.37518550000003,
        lng: 127.14049549999999,
        thumbnail:'https://www.costco.co.kr/medias/sys_master/images/hf1/h04/9856377487390.jpg',
    },
    {
        content: '2222222222222',
        lat: 37.37170682534783,
        lng: 127.13465901318364,
        thumbnail:'https://www.costco.co.kr/medias/sys_master/images/h66/h01/9897352855582.jpg',
    },
    {
        content: '333333333',
        lat: 37.379175545796244,
        lng: 127.1331569761353,
        thumbnail:'https://www.costco.co.kr/medias/sys_master/images/h0a/hea/11518577541150.jpg',
    }


];
class GoogleMap extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }

    onChange({center}) {
        const { setLatitudeOfCenter, setLongitudeOfCenter, } = this.props;
        setLatitudeOfCenter(center.lat);
        setLongitudeOfCenter(center.lng);

        console.log(center);
    }

    componentDidMount() {
        const { initGeoLocation, setMakers } = this.props;
        initGeoLocation();
        setMakers(mocks)
    }

    render() {

        const { latitude, longitude, zoom, makers, } = this.props;

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


                        {makers.map((item, index)=> (
                            <ContentComponent
                                key={index}
                                lat={item.get('lat')}
                                lng={item.get('lng')}
                                text={item.get('content')}
                                thumbnail={item.get('thumbnail')}
                            />
                        ))}


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
        makers: state.map.get('makers'),
    }),
    { setLongitudeOfCenter, setLatitudeOfCenter, initGeoLocation, setMakers, }
)(GoogleMap);
