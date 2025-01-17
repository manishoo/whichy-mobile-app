import ReactNative from 'react-native'
import I18n from 'react-native-i18n'

// Import all locales
import fa from '../locales/fa.json'
import en from '../locales/en.json'
import ar from '../locales/ar.json'

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true

I18n.defaultLocale = 'fa'
I18n.locale = 'fa'

// Define the supported translations
I18n.translations = {
  fa,
  en,
  ar,
}

const currentLocale = I18n.currentLocale()

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('ar') === 0 || currentLocale.indexOf('fa') === 0

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(false)

// The method we'll use instead of a regular string
export function translate(name, params = {}) {
  return I18n.t(name, params)
}

export default I18n