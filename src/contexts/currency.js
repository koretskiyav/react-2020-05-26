import { createContext } from 'react';

// export const currencies = {
//   usd: {sign: 'USD', name: 'US dollar', rate: 1, icon: '$'},
//   rub: {sign: 'RUB', name: 'Российский рубль', rate: 69.42, icon: '₽'},
//   uah: {sign: 'UAH', name: 'Українська гривня', rate: 26.78, icon: '₴'},
//   dong: {sign: 'DONG', name: 'đồng việt nam', rate: 23265.5, icon: '₫'},
//   cny: {sign: 'CNY', name: '中國新年', rate: 7.08, icon: '¥'},
// };
export const currencies = ['USD', 'RUB', 'UAH', 'DONG', 'CNY'];

// Изначально у меня эта функция была в компоненте App через useMemo, но что-то кажется в компоненте ее держать не то...
// Тем более сейчас чтобы добавить новую валюту, на только в этом файле в массив ее добавить и в функцию
export const getPrice = (price, currency) => {
  switch (currency) {
    case 'RUB':
      return `${(price * 69.42).toFixed(0)} ₽`;
    case 'UAH':
      return `${(price * 26.78).toFixed(0)} ₴`;
    case 'DONG':
      return `${(price * 23265.5).toFixed(0)} ₫`;
    case 'CNY':
      return `${(price * 7.08).toFixed(0)} ¥`;
    default:
      return `${price} $`;
  }
};

const CurrencyContext = createContext('USD');

export const { Provider } = CurrencyContext;

export default CurrencyContext;
