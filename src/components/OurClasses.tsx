import { Link } from 'react-router-dom'
import ourClassesImage from '../assets/images/our-classes.png'
import { Button } from './Button'

export const OurClasses = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap -mt-10 sm:mt-0 justify-center items-center gap-10 pb-20 bg-zinc-100">
      <img className="px-6 sm:px-0" src={ourClassesImage} alt="" />

      <div className="flex flex-col items-center lg:items-start gap-4 px-10">
        <span className=" text-2xl md:text-4xl text-orange100 uppercase font-semibold">
          Our classes
        </span>
        <strong className="text-darkBlue text-justify text-sm md:text-base">
          Just one class can teach you the skills you need to improve your
          confidence and safety awareness in day-to-day situations.
        </strong>
        <span className="text-darkBlue text-justify text-sm md:text-base">
          Working both independently and hand-in-hand with community groups and
          partnerships, we provide single, one-hour classes teaching the crucial
          elements of personal safety and self-defence. You don’t need any
          previous experience to attend, and our classes are completely free.
        </span>
        <Link to="/our-classes">
          <Button label="Find out how we can help" />
        </Link>
      </div>
    </div>
  )
}
