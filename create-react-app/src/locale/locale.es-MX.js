import {round} from 'lodash';

const  esMXLocale = () => ({
    title: 'bienvenido al sitio',
    content1: 'contenido 1',
    content2: 'contenido 2',
    price: (price) => `el precio de la subscripción es $${round(price, 2)} por mes`,

    signInBox: {
        title: '',
        subtitle: '',
        menu : [
            
        ]
    }
})

export default esMXLocale();