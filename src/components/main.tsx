import { FC } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyringe, faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { faSun, } from "@fortawesome/free-regular-svg-icons";
import Contact from './contact';
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
        <div className="max-w-screen-lg m-auto mb-8 p-4 text-2xl text-white leading-normal text-center quotes">Proloterapie je metodou 1.volby u většiny výhřezů meziobratlových plotének.<br /> 
        Operace pouze u těch případů, kdy hrozí ztráta motoriky neboli hybnosti.</div>
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
      <Contact />
      <h2 className="px-6 py-4 leading-10 text-2xl text-center text-white bg-green-900">Dr. Půlpán, jediný PROLOTERAPEUT v České a Slovenské republice.</h2>
      <div className="triangle-down green" />
      <div className="bg-black">
        <div className="max-w-screen-lg mt-6 m-auto text-white py-10 px-6 md:py-15 bg-black">
          <h3 className="mb-6 text-xl font-bold">Více než 30 let praxe u náš i v zahraničí</h3>
          <div className="mb-6">
            <h3 className="text-xl font-bold">Do roku 1990: </h3>
            <ul className="list-disc pl-4">
              <li>Ortopedická klinika ILF v Praze na Bulovce (zároveň osobní lékař dvacetinásobných mistrů světa v kolové bratrů Pospíšilových)</li>
              <li>Česká atestace z ortopedie</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold">Od roku 1990: </h3>
            <ul className="list-disc pl-4">
              <li>Ortopedická Universitní klinika Heidelberg (zároveň lékař německých reprezentantů v cyklistice, vzpíraní, judu v Olympijském středisku Heidelberg)</li>
              <li>Začíná provádět konservativní léčbu výhřezu meziobratlové ploténky (Proloterapii)</li>
              <li>Léčbu artrózy kloubů bez operace (preparátem Hyalart od firmy Bayer)</li>
              <li>Německá atestace z ortopedie (říjen 1994)</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold">Akupunktura celotělní </h3>
            <ul className="list-disc pl-4">
              <li>Diplom z Ortopedické univerzitní kliniky Heidelberg</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold">Manipulační léčba(Chirotherapie) </h3>
            <ul className="list-disc pl-4">
              <li>Diplom z Ortopedické univerzitní kliniky Heidelberg</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main