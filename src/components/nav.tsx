import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

const Nav: FC = () => {

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }
  }, [])

  const scrollStyles = classNames("h-20 transition-all duration-500 transparent fixed w-full z-10 flex items-center", {
    'bg-white text-black': offset !== 0,
    'bg-transparent text-white': offset === 0,
  })

  const textBlack = classNames({'text-black': offset})

  return (
    <nav className={`${scrollStyles}`}>
      <a href={"/"} className="text-2xl pl-4">PROLOTERAPIE</a>
    </nav>)
}


export default Nav

