import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

const Contact: FC = () => {
  return (
    <div className="bg-gray-900">
    <footer className="w-full bg-gray-900 max-w-screen-lg m-auto">
      <div
        className="md:h-56 max-w-7xl text-white p-6 md:p-12 flex flex-col md:flex-row items-stretch md:items-center md:justify-between m-auto"
      >
        <div className="mb-5 md:mb-0">
          <h3>Dr. med. <strong>Jiří Půlpán</strong></h3>
          <span>Česká a německá atestace</span>
        </div>
        <div className="mb-5 md:mb-0">
          <h3 className="text-left"><strong>Kontakt</strong></h3>
          <a href="mailto:info@ortopedie-pulpan.com" className="flex underline mb-2">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-4 mt-1" />info@ortopedie-pulpan.com
          </a>
          <a href="tel:608070706" className="flex underline">
            <FontAwesomeIcon icon={faPhone} size="lg" className="mr-4 mt-1" />608 070 706
          </a>
        </div>
        <div>
          <h3 className="text-left"><strong>Ordinace</strong></h3>
          <p>Dykova 31</p>
          <p>Praha-Vinohrady</p>
          <p>10100</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Contact