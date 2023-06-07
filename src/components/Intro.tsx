/* eslint-disable react/no-unescaped-entities */
import introHome from '../assets/images/intro-home.png'

export const Intro = () => {
  return (
    <div className="flex justify-between items-center gap-4 mt-20 pb-8 border-b ">
      <div className="flex flex-col gap-2">
        <strong className="text-5xl text-orange100 font-semibold leading-[48px]">
          Must be me
        </strong>
        <span className="text-3xl mt-4 text-darkBlue">
          'We believe in a world where everyone <br /> has the right to feel
          safe'
        </span>
      </div>
      <img className="relative z-10 w-[700px]" src={introHome} alt="" />
    </div>
  )
}
