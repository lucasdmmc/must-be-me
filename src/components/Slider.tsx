import quoteOrange from '../assets/images/quote-orange.svg'
import quoteWhite from '../assets/images/quote-white.svg'
import quoteMarkBlue from '../assets/images/quote-mark.png'
import quoteMarkOange from '../assets/images/quote-mark-orange.png'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

export const Slider = () => {
  return (
    <div className="bg-lightBrown mt-8 flex flex-col justify-center items-center h-[450px] rounded-lg">
      <div className="flex justify-between w-full px-20 gap-10">
        <button>
          <ArrowLeft size={32} />
        </button>
        <div className="flex">
          <div className="relative">
            <img
              className="relative left-10 top-10"
              src={quoteOrange}
              alt={quoteOrange}
            />
            <img
              className="absolute top-20 left-36"
              src={quoteMarkBlue}
              alt={quoteMarkBlue}
            />
            <span className="absolute top-24 left-10 p-8 text-white text-lg text-center">
              I really enjoyed my class. I never knew safety could be so
              empowering. Theo, 15
            </span>
          </div>

          <div className="relative">
            <img className="relative " src={quoteWhite} alt="" />
            <img
              className="absolute top-12 left-32"
              src={quoteMarkOange}
              alt={quoteMarkOange}
            />
            <span className="absolute top-10 p-12 text-darkBlue text-lg text-center">
              I really enjoyed my class. I never knew safety could be so
              empowering. Theo, 15
            </span>
          </div>
        </div>
        <button>
          <ArrowRight size={32} />
        </button>
      </div>
    </div>
  )
}
