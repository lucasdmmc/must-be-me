import whoAreWeImage from '../assets/images/whoarewe.jpeg'
import { Button } from './Button'

export const WhoWeAre = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="flex flex-wrap-reverse lg:flex-nowrap justify-center gap-4 bg-orange100 h-full lg:py-10 rounded-lg mb-20 mt-10"
    >
      <div className="flex flex-col items-center justify-center lg:items-start gap-4 mt-0 lg:mt-14 lg:px-20 px-10 pb-10 min-w-[400px]">
        <strong className="lg:text-start text-3xl lg:text-5xl text-white">
          Who we are
        </strong>
        <span className=" text-justify text-darkBlue text-lg sm:text-start leading-6 sm:px-20 lg:px-0">
          Must Be Me is a UK-based organisation dedicated to breaking the
          silence around safety and delivering what we call ‘everyday
          empowerment’.
        </span>
        <span className="text-darkBlue text-justify sm:text-lg sm:text-start leading-6 sm:px-20 lg:px-0">
          Our mission is to equip anyone who wants it – regardless of gender,
          age, background or geography – with free safety-improvement training.
          Our work enhances wellbeing and safeguards lives and communities.
        </span>
        <Button label="Meet our team" />
      </div>
      <img
        className="object-cover w-[500px] lg:w-[700px] relative lg:h-[400px] lg:mr-32 p-10 lg:p-0 overflow-hidden flex items-center justify-center"
        src={whoAreWeImage}
        alt=""
      />
    </div>
  )
}
