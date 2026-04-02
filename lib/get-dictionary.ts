import { type Locale } from './i18n-config'

const dictionaries: Record<Locale, () => Promise<any>> = {
  'en-US': () => import('../dictionaries/en-US.json').then((module) => module.default),
  'en-GB': () => import('../dictionaries/en-GB.json').then((module) => module.default),
  'en-AU': () => import('../dictionaries/en-AU.json').then((module) => module.default),
  'en-AE': () => import('../dictionaries/en-AE.json').then((module) => module.default),
  'hi': () => import('../dictionaries/hi.json').then((module) => module.default),
  'fr': () => import('../dictionaries/fr.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries['en-US']()
