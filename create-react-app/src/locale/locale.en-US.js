import {round} from 'lodash';

const enUsLocale = () => ({
    title: 'welcome to the site',
    content1: 'content 1 ',
    content2: 'content 2',
    price: (price) => `the price of the subscription is $${round(price, 2)} each month`
})

export default enUsLocale();