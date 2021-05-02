import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

const Nav: FC = () => {

  const [offset, setOffset] = useState(0)
  const [windowWidth, setwindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onresize = () => {
        setwindowWidth(window.innerWidth)
      }
    }
  }, [])

  const scrollStyles = classNames("h-20 transition-all duration-500 transparent fixed w-full pt-6 md:pt-0 z-10 flex flex-col md:flex-row items-center md:justify-between px-4", {
    'bg-white text-black': offset !== 0,
    'bg-transparent text-white': offset === 0,
  })

  const hideIfZeroOffsetIsMoreThanZero = classNames({'hidden': offset !== 0 || windowWidth < 600})
  return (
    <nav className={`${scrollStyles}`}>
      <a href={"/"} className="text-2xl pl-4 no-underline tracking-widest">PROLOTERAPIE</a>
      <a href={"/"} className={`text-2xl pl-4 no-underline tracking-widest ${hideIfZeroOffsetIsMoreThanZero}`}>PROLOTHERAPY</a>
      <a href={"/"} className={`text-2xl pl-4 no-underline tracking-widest ${hideIfZeroOffsetIsMoreThanZero}`}>PROLIFERATIONSTHERAPIE</a>
    </nav>)
}


export default Nav

