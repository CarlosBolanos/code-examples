import { useLocaleParams } from './locale-params.hook';

import enUsLocale from '../locale/locale.en-US'
import esMXLocale from '../locale/locale.es-MX'

const getLocal = (defaultLocale) => {    
    // const browserLocal = navigator.language
    // console.log('f: browserLocal', browserLocal)

    switch(defaultLocale){
        case 'es-MX':
            return esMXLocale;
        default:
            return enUsLocale;
    }
}

const useLocale = () => {
    const {defaultLocale} = useLocaleParams()    
    var messages = getLocal(defaultLocale);
    return messages;

}

export default useLocale