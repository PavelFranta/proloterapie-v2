import { FC } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyringe, faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { faSun, } from "@fortawesome/free-regular-svg-icons";
import Contact from './contact';
import '../css/main.css'

interface Props {
  translation
}

const Main: FC<Props> = ({translation}) => {
  return (
    <main className="w-full bg-black">
      <div className="relative">
        <StaticImage
          src="../assets/praha.jpg"
          formats={["AUTO", "WEBP", "AVIF"]}
          imgClassName="prague"
          quality={100}
          alt="Praha"
          className="w-full max-h-500"
        />
      </div>
      <h2 className="px-4 py-2 sm:px-6 sm:py-4 -mt-2 sm:leading-10 text-2xl text-center bg-white">
        {translation.hero}
      </h2>
      <div className="triangle-down" />
      <div className="max-w-screen-lg m-auto">
        <div
          className="bg-black flex flex-col md:flex-row justify-between py-8 text-center text-white"
        >
          <div className="flex-1 p-4 sm:p-6">
            <FontAwesomeIcon icon={faHandHoldingMedical} size='3x' className="text-green-900 m-auto mb-6" />
            <h4 className="mb-4 font-bold text-3xl">{translation.helpsWithTitle}</h4>
            <p className="flex-1">
              {translation.helpsWith}
			      </p>
          </div>
          <div className="flex-1 p-4 sm:p-6">
            <FontAwesomeIcon icon={faSun} size='3x' className="text-green-900 m-auto mb-6" />
            <h4 className="mb-4 font-bold text-3xl">{translation.advantagesTitle}</h4>
            <p className="flex-1">
              {translation.advantages}
		      	</p>
          </div>
          <div className="flex-1 p-4 sm:p-6">
            <FontAwesomeIcon icon={faSyringe} size='3x' className="text-green-900 m-auto mb-6" />
            <h4 className="mb-4 font-bold text-3xl">{translation.implementationTitle}</h4>
            <p className="flex-1">
              {translation.implementation}
		      	</p>
          </div>
        </div>
        <div className="max-w-screen-lg m-auto mb-0 sm:mb-8 p-4 text-2xl text-white leading-normal text-center quotes">{translation.briefDescription}</div>
      </div>
      <h2 className="px-6 py-4 leading-10 text-2xl text-center bg-white">
        {translation.treatmentDescriptionTitle}
      </h2>
      <div className="triangle-down" />
      <div className="bg-green-900">
        <div className="max-w-screen-lg m-auto lg:flex md:items-center text-white pt-8 pb-4 sm:pb-10 sm:pt-10 md:py-15 bg-green-900">
          <div>
            <p className="px-6 py-2">
              {translation.treatmentParagraphOne}
	        	</p>
            <p className="px-6 py-2">
              {translation.treatmentParagraphTwo}
	      	  </p>
          </div>
          <p className="px-6 py-2">
          {translation.treatmentParagraphThree}
          </p>
          <p className="px-6 py-2">
            {translation.treatmentParagraphFour}
		      </p>
          <p className="px-6 py-2">
            {translation.treatmentParagraphFive}
          </p>
        </div>
      </div>
      <h2 className="px-6 py-4 leading-10 text-2xl text-center bg-white">
        {translation.formTitle}
      </h2>
      <Contact translation={translation}/>
      <h2 className="px-6 py-4 leading-10 text-2xl text-center text-white bg-green-900">
        {translation.onlyProloterapeutTitle}
      </h2>
      <div className="triangle-down green" />
      <div className="bg-black">
        <div className="max-w-screen-lg mt-6 m-auto text-white py-6 sm:py-10 px-6 md:py-15 bg-black">
          <h3 className="mb-6 text-xl font-bold">{translation.moreThanThirtyYearsExperience}</h3>
          <div className="mb-6">
            <h3 className="text-xl font-bold">{translation.tillNinety}</h3>
            <ul className="list-disc pl-4">
              <li>{translation.tillNinetyFirst}</li>
              <li>{translation.tillNinetySecond}</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold">{translation.fromNinety}</h3>
            <ul className="list-disc pl-4">
              <li>{translation.fromNinetyFirst}</li>
              <li>{translation.fromNinetySecond}</li>
              <li>{translation.fromNinetyThird}</li>
              <li>{translation.fromNinetyFourth}</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold">{translation.acupuncture}</h3>
            <ul className="list-disc pl-4">
              <li>{translation.diplomHeidelberg}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">{translation.chiro}</h3>
            <ul className="list-disc pl-4">
              <li>{translation.diplomHeidelberg}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main