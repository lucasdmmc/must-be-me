import whoAreWeImage from '../assets/images/whoarewe.jpeg'
import { Button } from './Button'

export const WhoWeAre = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="flex flex-wrap-reverse sm:flex-nowrap justify-between gap-4 bg-orange100 h-full sm:py-10 rounded-lg mb-20 mt-10"
    >
      <div className="flex flex-col items-center justify-center sm:items-start gap-4 mt-0 sm:mt-14 sm:px-20 px-10 pb-10 min-w-[400px]">
        <strong className="sm:text-start text-3xl sm:text-5xl text-white">
          Who we are
        </strong>
        <span className=" text-justify text-darkBlue text-lg sm:text-start leading-6">
          Must Be Me is a UK-based organisation dedicated to breaking the
          silence around safety and delivering what we call ‘everyday
          empowerment’.
        </span>
        <span className="text-darkBlue text-justify sm:text-lg sm:text-start leading-6">
          Our mission is to equip anyone who wants it – regardless of gender,
          age, background or geography – with free safety-improvement training.
          Our work enhances wellbeing and safeguards lives and communities.
        </span>
        <Button label="Meet our team" />

        <button className="mt-4 flex items-center justify-center min-w-[290px] max-w-[290px] uppercase text-white cursor-pointer transition duration-300 hover:bg-blue-900 bg-darkBlue p-5 rounded-[27.5px]">
          Meet our team
        </button>
      </div>
      <img
        className="object-cover w-[500px] sm:w-[700px] relative sm:h-[400px] sm:mr-32 p-10 sm:p-0 overflow-hidden flex items-center justify-center"
        src={whoAreWeImage}
        alt=""
      />
    </div>
  )
}
