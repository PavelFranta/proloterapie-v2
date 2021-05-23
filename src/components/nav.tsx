import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'
import CzechFlag from '../assets/svg/czech-flag.svg'
import USFlag from '../assets/svg/us-flag.svg'

interface Props {
  lang: string
  toggleLanguage: () => void
  translation
}

const Nav: FC<Props> = ({lang, toggleLanguage, translation}) => {

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }
  }, [])

  const scrollStyles = classNames("h-20 transition-all duration-500 transparent fixed w-full pt-6 md:pt-0 z-10 flex flex-col md:flex-row md:items-center md:justify-between px-4", {
    'bg-white text-black': offset !== 0,
    'bg-transparent text-white': offset === 0,
  })

  return (
    <nav className={`${scrollStyles}`}>
      <a href={"/"} className="text-2xl pl-4 no-underline tracking-widest">
        {translation.title}
      </a>
      <button
          className="absolute -mt-3 sm:-mt-0 right-4 h-auto w-14 focus:outline-none"
          onClick={toggleLanguage}
        >
          {lang === 'cz' ? <CzechFlag /> : <USFlag /> }
        </button>
    </nav>)
}


export default Nav

