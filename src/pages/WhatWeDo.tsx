/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import introWhatWeDo from '../assets/images/intro-whatwedo.png'
import arrowDown from '../assets/images/arrow-down-blue.svg'
import why1 from '../assets/images/why-1.png'
import why2 from '../assets/images/why-2.png'
import { Button } from '../components/Button'
import { HowWeDo } from '../components/HowWeDo'
import { howWeDo } from '../data/howWeDo'

export const WhatWeDo = () => {
  return (
    <div>
      <div className="w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-10 mt-5 md:mt-20 items-center">
        <div className="mt-8 flex flex-col justify-center items-center md:items-center lg:items-start">
          <h1 className="text-orange100 text-3xl md:text-5xl font-semibold mb-2.5">
            WHAT WE DO
          </h1>
          <p className="text-center sm:text-start text-lg sm:text-3xl sm:mt-4 text-darkBlue">
            We make safety education accessible <br /> to everyone
          </p>
          <Button label="Our classes" />
        </div>
        <img className="mt-10 md:mt-0" src={introWhatWeDo} alt="" />
      </div>

      <div className="bg-orange-200 mx-auto p-10 md:p-32">
        <div className="flex flex-col items-center text-center">
          <p className="leading-7 text-justify md:text-center text-sm md:text-lg">
            Safety is a daily issue for many people around the world. Every day,
            intimidation, lack of safety awareness and fear impact on people’s
            lives, especially amongst the young and the vulnerable. Despite
            this, much education on safety and self-defence is expensive and
            geared at limited groups and demographics. This often makes safety
            education inaccessible for those who need it most.
          </p>
          <img className="my-5 w-[12px] md:min-w-min" src={arrowDown} />
          <h1 className="text-orange100 text-2xl md:text-4xl">OUR SOLUTION</h1>
          <p className="leading-7 text-justify md:text-center text-sm md:text-lg mt-8">
            Our solution is to provide access to safety education and support to
            anyone who needs it, regardless of gender, age, ethnicity or
            geography.
          </p>
          <p className="leading-7 text-justify md:text-center text-sm md:text-lg mt-8">
            <strong>
              We provide completely free, stand-alone safety-improvement classes{' '}
            </strong>
            with the aim of empowering people to assess danger and avoid
            potentially harmful situations. Where avoidance is not possible, we
            teach them the skills and confidence to react calmly and
            proportionately.
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-4 md:my-10 items-center gap-10 p-10">
        <span className="uppercase text-orange100 text-2xl md:text-5xl">
          How we do it
        </span>
        <div className="flex flex-wrap justify-center gap-4">
          {howWeDo.map((card) => (
            <HowWeDo
              description={card.description}
              image={`public/${card.image}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center pt-16">
        <h1 className="text-orange100 text-4xl pb-5">WHY WE DO IT</h1>
        <p className="text-center md:text-start">
          We believe that everyone has the right to feel safe.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-10 mt-5 items-center md:gap-12 px-5 gap-4 leading-7">
        <img src={why1} alt="" />
        <p className="text-sm md:text-lg text-justify md:text-center">
          Whilst working with young people and vulnerable groups around the
          world, our founder Mayra noticed huge gaps in the availability of
          personal safety education. This lack of access to resources – and the
          potential impact on communities – motivated her to create change.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center pb-20 md:gap-12 gap-6 leading-7 mt-20 md:mt-0">
        <div className="flex flex-col justify-center items-center px-5">
          <p className="text-sm md:text-lg text-justify md:text-center">
            She set out to create a programme that would work for all people,
            not just those who could pay for expensive self-defence classes. It
            had to involve a <strong>short time commitment</strong>, making it{' '}
            <strong>flexible</strong> enough for busy students and communities.
            The programme needed to be
            <strong> universally understandable</strong> as well as{' '}
            <strong>culturally and physically inclusive</strong>.
          </p>
          <p className="mt-10 text-sm md:text-lg text-justify md:text-center">
            Must Be Me was the result of this ambition and has grown to become a
            recognised safety-education charity, with successful projects in the
            UK and Kenya to date.
          </p>
          <Button label="Get in touch" />
        </div>
        <img src={why2} alt="" />
      </div>
    </div>
  )
}
