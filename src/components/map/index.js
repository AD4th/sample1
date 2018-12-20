import React, { Component } from 'react';
import './style.css';

const profileImg = {
    backgroundImage:"url('https://i.pinimg.com/736x/2c/2c/60/2c2c60b20cb817a80afd381ae23dab05.jpg')"
}
class Index extends Component {
    render() {
        return(
            <div class="map_wrap">
                <aside>
                    <div class="user_info">
                        <span class="user_profile" style={profileImg}></span>
                        <span class="user_name">서영종</span>
                    </div>
                </aside>
                <div class="map_content">
fddf
                </div>
            </div>
        )
    }
}

export default Index;
