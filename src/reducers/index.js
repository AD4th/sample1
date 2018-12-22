import { combineReducers } from 'redux';
import i18n from './i18nReducer';
import map from './mapReducer';

export default combineReducers({
    i18n,
    map,
});

