import { Header } from '../../components/Header'

import pin from '../../assets/images/stat-pin.svg'

import { Intro } from './components/Intro'
import { Slider } from './components/Slider'
import { Footer } from './components/Footer'
import { WhoWeAre } from './components/WhoWeAre'
import { OurClasses } from './components/OurClasses'
import { NewsLetter } from './components/NewLetter'

export const Home = () => {
  return (
    <div className="max-w-[1360px] mt-0 mb-10 mx-auto">
      <Header />

      <Intro />
      <Slider />
      {/* Find out more */}
      <div className="w-full flex flex-col gap-6 bg-zinc-100 mt-10 px-14 py-10 items-center rounded-lg">
        <span className="text-xl leading-8 text-darkBlue text-center">
          We are a registered safety-education charity providing{' '}
          <strong>accessible, inclusive </strong>
          and <strong>effective</strong> personal safety and self-defence
          training.
        </span>

        <span className="text-xl leading-8 text-darkBlue text-center">
          We believe that personal safety means having the knowledge to avoid
          unsafe situations, the confidence tomake well-informed safety
          decisions, and the self-assurance that comes with knowing how to help
          yourself out of danger.
        </span>

        <button className="flex items-center justify-center min-w-[290px] uppercase text-white cursor-pointer transition duration-300 hover:bg-blue-900 bg-darkBlue p-5 rounded-[27.5px]">
          Find out more
        </button>
      </div>

      {/* Section 1 */}

      <div className="mt-10 bg-darkBlue w-full h-[450px] rounded-md p-10">
        <div className="flex justify-between relative items-center">
          <div className="relative">
            <img src={pin} alt="" />
            <strong className="text-orange100 text-5xl absolute top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              2.3M
            </strong>
            <span className="block text-center mt-2 text-white ">
              adults aged 17-74 experienced domestic <br /> abuse in the UK in
              the past year.
            </span>
          </div>

          <div className="relative">
            <img src={pin} alt="" />
            <strong className="text-orange100 text-5xl absolute top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              47%
            </strong>
            <span className="block text-center mt-2 text-white ">
              of transgender people are sexually <br /> assaulted at some point
              in their lifetime
            </span>
          </div>

          <div className="relative">
            <img src={pin} alt="" />
            <strong className="text-orange100 text-5xl absolute top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              28%
            </strong>
            <span className="block text-center mt-2 text-white ">
              of females aged 14-21 feel less safe going <br /> out alone in
              public than before lockdown.
            </span>
          </div>
        </div>
      </div>

      <WhoWeAre />
      <OurClasses />
      <NewsLetter />

      <Footer />
    </div>
  )
}
