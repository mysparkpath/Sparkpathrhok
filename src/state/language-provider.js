import React, { useContext, useState } from 'react'

const LanguageContext = React.createContext()

function LanguageProvider(props) {
  const [lang, setLang] = useState('en')

  const toggleLang = () => {
    setLang(lang === 'en' ? 'fr' : 'en')
  }

  const value = {
    lang,
    toggleLang,
  }

  return <LanguageContext.Provider value={value} {...props} />
}

function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}

export { LanguageProvider, useLanguage }
