import { FC, useState } from 'react'

import Nav from "./nav"
import Footer from './footer'
import Main from './main'
import SEO from './seo'
import { getTranslationsFor } from '../translations/translations'

const Layout:FC<{children}> = () => {
  const [state, setState] = useState(
    {
      lang: 'cz',
      translation: getTranslationsFor('cz')
    }
  )
  
  const toggleLanguage = () => {
    state.lang === 'cz' ? 
      setState({lang: 'eng', translation: getTranslationsFor('eng')}) : 
      setState({lang: 'cz', translation: getTranslationsFor('cz')});
  }
  
  return (
    <>
      <Nav
        toggleLanguage={toggleLanguage}
        lang={state.lang}
        translation={state.translation.nav}
      />
      <Main translation={state.translation.main}/>
      <Footer translation={state.translation.footer}/>
      <SEO />
    </>
  )
}

export default Layout
