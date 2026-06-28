import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang, TranslationShape } from './translations'

interface LanguageContextValue {
  lang: Lang
  t: TranslationShape
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')
  const toggleLang = () => setLang((current) => (current === 'pt' ? 'en' : 'pt'))

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used inside a LanguageProvider')
  }
  return ctx
}