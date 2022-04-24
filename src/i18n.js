import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './components/translations/en/index.json'
import translationRU from './components/translations/ru/index.json'

const resources = {
	en: {
		translation: translationEN,
	},
	ru: {
		translation: translationRU,
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',

	keySeparator: false,

	interpolation: {
		escapeValue: false,
	},
})

export default i18n
