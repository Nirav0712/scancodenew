// Server Component - fetches dictionary and passes to client
import { getDictionary } from '@/lib/get-dictionary'
import { type Locale } from '@/lib/i18n-config'
import AboutUsClient from './AboutUsClient'

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return <AboutUsClient dict={dict} />
}
