import I18n from 'react-native-i18n';
import en from './Languages/english';
import ara from './Languages/Arabic';
import bg from './Languages/Bulgarian';
import chi from './Languages/Chinese';
import Hindi from './Languages/Hindi';
import Portuguese from './Languages/Portuguese';
import Russian from './Languages/Russian';
import Spanish from './Languages/Spanish';
I18n.fallbacks = true;

I18n.translations = {
    en,
    ara,
    bg,
    chi,
    Russian,
    Hindi,
    Portuguese,
    Spanish


};

const switchLanguage = (lang) => {
    I18n.locale = lang;

    // component.forceUpdate();
};



export { I18n, switchLanguage }