import quoteOrange from '../assets/images/quote-orange.svg'
import quoteWhite from '../assets/images/quote-white.svg'
import quoteMarkBlue from '../assets/images/quote-mark.png'
import quoteMarkOange from '../assets/images/quote-mark-orange.png'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

import { useState } from 'react'
import { useMediaQuery } from '@react-hook/media-query'

export const Slider = () => {
  const [currentGroup, setCurrentGroup] = useState(0)
  const slides = [
    {
      image: quoteOrange,
      quote:
        'I really enjoyed my class. I never knew safety could be so empowering. Theo, 15',
      quoteMark: quoteMarkBlue,
    },
    {
      image: quoteWhite,
      quote:
        'My perception on safety has changed. I feel so much more in control of it now. Zak, 33',
      quoteMark: quoteMarkOange,
    },
    // Add more slides here
    {
      image: quoteOrange,
      quote: 'I feel much better about walking around alone now. Purity, 17',
      quoteMark: quoteMarkBlue,
    },
    {
      image: quoteWhite,
      quote:
        'I understand which of my body parts I can use to defend myself. Mwanamisi, 13',
      quoteMark: quoteMarkOange,
    },
    {
      image: quoteOrange,
      quote:
        'I learned how to defend myself, and understand how to say no. Rahman, 11',
      quoteMark: quoteMarkBlue,
    },
    {
      image: quoteWhite,
      quote:
        "I learned so many great tips I wouldn't even think about before. Claire, 24",
      quoteMark: quoteMarkOange,
    },
  ]

  const groupSize = useMediaQuery('(max-width: 840px)') ? 1 : 2
  const totalGroups = Math.ceil(slides.length / groupSize)
  const startSlide = currentGroup * groupSize
  const endSlide = startSlide + groupSize

  const handlePrevSlide = () => {
    setCurrentGroup((prevGroup) =>
      prevGroup === 0 ? totalGroups - 1 : prevGroup - 1,
    )
  }

  const handleNextSlide = () => {
    setCurrentGroup((prevGroup) =>
      prevGroup === totalGroups - 1 ? 0 : prevGroup + 1,
    )
  }
  return (
    <div className="bg-lightBrown mt-8 flex flex-col justify-center items-center h-[450px] rounded-lg">
      <div
        id="slide-container"
        className="flex justify-between -mt-20 sm:mt-0 w-full sm:px-20 gap-10"
      >
        <button
          className="relative top-10 left-2 sm:top-0 sm:left-0"
          onClick={handlePrevSlide}
          disabled={currentGroup === 0}
        >
          <ArrowLeft size={32} />
        </button>

        <div className="transform duration-300 ease-out flex justify-center items-center">
          {slides.slice(startSlide, endSlide).map((slide, index) => (
            <div className="relative right-10" key={index}>
              <img
                className={`relative ${
                  index === 0
                    ? 'left-10 p-5 sm:p-0 top-8 sm:top-10 sm:w-full'
                    : ''
                }`}
                src={slide.image}
                alt={slide.image}
              />
              <img
                className={`absolute ${
                  index === 0 ? 'top-20  left-36' : 'top-16 left-32'
                }`}
                src={slide.quoteMark}
                alt={slide.quoteMark}
              />
              <span
                className={`absolute ${
                  index === 0
                    ? 'top-24 left-20 text-sm sm:left-10 sm:text-lg'
                    : 'top-10'
                } p-8 ${
                  index === 0
                    ? 'sm:text-white text-darkBlue top-10'
                    : 'text-darkBlue'
                } text-lg text-center top-20`}
              >
                {slide.quote}
              </span>
            </div>
          ))}
        </div>

        <button
          className="relative top-10 right-2 sm:top-0 sm:right-0"
          onClick={handleNextSlide}
          disabled={currentGroup === totalGroups - 1}
        >
          <ArrowRight size={32} />
        </button>
      </div>
    </div>
  )
}
