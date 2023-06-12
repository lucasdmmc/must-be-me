import image1 from '../../public/slider-icon.png'
import image2 from '../../public/slider-icon-2.png'

import image3 from '../../public/slider-icon-3.png'

export const HowWeDo = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="flex flex-col items-center gap-4 rounded-lg text-sm py-5 px-5 w-[300px] h-[370px] bg-darkBlue">
        <img className="w-[100px]" src={image1} alt="" />
        <p className="text-white text-center">
          In just a single one-hour session, attendees learn the power of
          understanding personal safety whilst gaining the tools to diffuse
          potentially dangerous situations. Our staff take an innovative,
          holistic and personalised approach, considering all aspects of
          personal safety including verbal and physical self-defence.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-lg text-sm py-5 px-5 w-[300px] h-[370px] bg-darkBlue">
        <img className="w-[100px]" src={image2} alt="" />
        <p className="text-white text-center">
          Our classes are unique. Created by our chair and founder, Mayra, they
          are designed to work for people of all backgrounds and abilities.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-lg text-sm py-5 px-5 w-[300px] h-[370px] bg-darkBlue">
        <img className="w-[100px]" src={image3} alt="" />
        <p className="text-white text-center">
          We believe it is always better to avoid a dangerous situation than to
          have to react to one. We see physical self-defence techniques as a
          last resort that should only be used when absolutely necessary.
        </p>
      </div>
    </div>
  )
}
