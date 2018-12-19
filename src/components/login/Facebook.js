import React, { Component } from 'react';
import {connect} from 'react-redux';
import languagePack from '../../constants/languagePack';
import FacebookLoginButton from 'react-facebook-login';

class Facebook extends Component {

    responseFacebook(response) {
        console.log(response)
    }

    render() {
        const { lang, } = this.props;
        const text = languagePack[lang];
        return (
            <FacebookLoginButton
                appId="2384166731869056"
                autoLoad={false}
                fields={"name,email,picture"}
                callback={this.responseFacebook}
                textButtona={text.login.facebook.login_txt}
            />
        );
    }
}

export default connect(
    state => ({
        lang: state.i18n.get('language'),
    }),
    null,
)(Facebook);
