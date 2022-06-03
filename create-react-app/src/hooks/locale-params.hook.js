import { useLocation } from 'react-router-dom';

export const useLocaleParams = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const locale = params.get('locale');
  let defaultLocale  

  switch (locale) {
    case 'es':
      defaultLocale = 'es-MX';
      break;

      default:
          defaultLocale = 'en-US'
      break;
  }

  return {defaultLocale};
};
