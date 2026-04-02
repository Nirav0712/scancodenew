export const i18n = {
  defaultLocale: 'en-US',
  locales: ['en-US', 'en-GB', 'en-AU', 'en-AE', 'hi', 'fr'],
} as const

export type Locale = (typeof i18n)['locales'][number]
