import React, { FC } from 'react'

import Nav from "./nav"
import Footer from './footer'
import Main from './main'
import SEO from './seo'

const Layout:FC<{children}> = () => {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
      <SEO />
    </>
  )
}

export default Layout
