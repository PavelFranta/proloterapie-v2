import { FC } from 'react'

import Nav from "./nav"
import Footer from './footer'
import Main from './main'

const Layout:FC = () => {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  )
}

export default Layout
