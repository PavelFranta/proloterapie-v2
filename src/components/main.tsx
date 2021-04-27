import { FC } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyringe, faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { faSun,  } from "@fortawesome/free-regular-svg-icons";
import '../css/main.css'

const Main: FC = () => {
  return (
    <main className="w-full bg-black">
      <StaticImage
        src="../assets/praha.jpg"
        formats={["AUTO", "WEBP", "AVIF"]}
        imgClassName="prague"
        quality={100}
        alt="Praha"
        className="w-full max-h-500"
      />
      <h2 className="px-6 py-4 -mt-2 leading-10 text-2xl text-center bg-white">
        Proloterapie je léčebná metoda založená na stimulaci přirozeného procesu hojení těla.
      </h2>
      <div className="triangle-down" />
      <div className="max-w-screen-lg m-auto">
        <div
          className="bg-black flex flex-col md:flex-row justify-between py-8 text-center text-white"
        >
          <div className="flex-1 p-6">
            <FontAwesomeIcon icon={faHandHoldingMedical} size='3x' className="text-green-900 m-auto mb-6" />
            <h4 className="mb-4 font-bold text-3xl">S čím mi pomůže?</h4>
            <p className="flex-1">
              Proloterapie se ve Spojených státech a v západní Evropě již více než 50 let úspěšně používá
              při léčbě poškozených vazů, šlach, kloubů a meziobratlových plotének.
			      </p>
          </div>
          <div className="flex-1 p-6">
            <FontAwesomeIcon icon={faSun} size='3x' className="text-green-900 m-auto mb-6" />
            <h4 className="mb-4 font-bold text-3xl">Výhody této metody</h4>
            <p className="flex-1">
              Hlavní výhodou proloterapie je její vysoká úspěšnost (80%), minimální vedlejší účinky a
              ambulantní styl léčby. Většinou není nutná ani pracovní neschopnost.
		      	</p>
          </div>
          <div className="flex-1 p-6">
            <FontAwesomeIcon icon={faSyringe} size='3x' className="text-green-900 m-auto mb-6" />
            <h4 className="mb-4 font-bold text-3xl">Jak se to provádí?</h4>
            <p className="flex-1">
              Proloterapeutická stimulace se provádí sérií injekcí, jejichž hlavní složkou je cukerný
              roztok z dextrózy.
		      	</p>
          </div>
        </div>
      </div>
      <h2 className="px-6 py-4 leading-10 text-2xl text-center bg-white">Detailní popis léčby</h2>
      <div className="triangle-down" />
      <div className="bg-green-900">
        <div className="max-w-screen-lg m-auto lg:flex md:items-center text-white py-10 md:py-15 bg-green-900">
          <div>
            <p className="px-6 py-2">
              Pacientovi je na léčené místo injekčně vpraven roztok dextrózy, který vytvoří lokální zánět.
	        	</p>
            <p className="px-6 py-2">
              Tím dojde k mobilizací imunitního systému, který zasáhne a začne toto místo intenzivně
              regenerovat.
	      	</p>
          </div>
          <p className="px-6 py-2">Injekční aplikace trvá několik málo vteřin a je velmi dobře snášena i méně statečnými.</p>
          <p className="px-6 py-2">
            Pro hluboké proléčení je třeba aplikaci v týdenních intervalech několikrát opakovat. Maximálně
            však 10 týdnů.
		      </p>
          <p className="px-6 py-2">Účinek léčby proloterapií je trvalý a není třeba jej obnovovat.</p>
        </div>
      </div>
      <h2 className="px-6 py-4 leading-10 text-2xl text-center bg-white">
        Domluvte si termín své konzultace
      </h2>
      <div className="triangle-down" />
    </main>
  )
}

export default Main