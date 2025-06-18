import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 同步加载翻译文件（也可以异步加载）
const loadLocales = async () => {
  const en = await import('../public/locales/en/translation.json');
  const zh = await import('../public/locales/zh/translation.json');

  return {
    en: { translation: en },
    zh: { translation: zh },
  };
};

loadLocales().then((resources) => {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // 默认语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
});

export default i18n;