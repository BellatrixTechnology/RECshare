import I18n from 'react-native-i18n';
import en from './Languages/english';

I18n.fallbacks = true;

I18n.translations = {
    en,

};

const switchLanguage = (lang, component) => {
    I18n.locale = lang;
    component.forceUpdate();
};



export { I18n, switchLanguage }