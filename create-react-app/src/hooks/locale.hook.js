import { useLocaleParams } from './locale-params.hook';

import enUsLocale from '../locale/locale.en-US'
import esMXLocale from '../locale/locale.es-MX'

const getLocal = (defaultLocale) => {
    switch(defaultLocale){
        case 'es-MX':
            return esMXLocale;

        default:
            return enUsLocale;
    }
}

const useLocale = () => {
    const {defaultLocale} = useLocaleParams()
    
    const translate = (key) => {
        var messages = getLocal(defaultLocale);
        return messages[key]
    }

    return {
        messages: getLocal(defaultLocale),
        translate: translate
    }
}

export default useLocale