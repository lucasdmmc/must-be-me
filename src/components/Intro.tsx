/* eslint-disable react/no-unescaped-entities */
import introHome from '../assets/images/intro-home.png'

export const Intro = () => {
  return (
    <div className=" w-full flex flex-wrap lg:flex-nowrap justify-center md:justify-between items-center gap-4 mt-20 pb-8 md:border-b ">
      <div className="flex flex-col gap-2">
        <strong className="text-center md:text-start text-3xl sm:text-5xl text-orange100 font-semibold leading-[48px]">
          Must be me
        </strong>
        <span className="text-center sm:text-start text-lg sm:text-3xl sm:mt-4 text-darkBlue">
          'We believe in a world where everyone <br /> has the right to feel
          safe'
        </span>
      </div>
      <img
        className="w-[400px] mt-8 sm:mt-0 sm:w-[700px]"
        src={introHome}
        alt=""
      />
    </div>
  )
}
