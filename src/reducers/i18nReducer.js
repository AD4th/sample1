import { Map } from 'immutable';
import languagePack from '../constants/languagePack';

const initialState = Map({
  // languagePack keys: [kr, En]
  language: Object.keys(languagePack)[1],
  isModalOpen: false,
});

const availableLanguages = Object.keys(languagePack);

const i18nReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_LANGUAGE':
      return availableLanguages.includes(action.lang) ? state.set('language', action.lang) : state;
    default:
      return state;
  }
};

export default i18nReducer;

