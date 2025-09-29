import { en, ha } from './a_language';
import { I18n } from 'i18n-js';


const i18n = new I18n({
    en, ha
});
i18n.enableFallback = true;


export default i18n;