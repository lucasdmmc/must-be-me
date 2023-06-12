import getInvolvedIntroImage from '../assets/images/intro-getinvolved.png'
import volunteerImage from '../assets/images/volunteer.png'
import donateImage from '../assets/images/donate.png'
import { Button } from '../components/Button'

export const GetInvolved = () => {
  return (
    <div>
      <div className="flex justify-center mt-28">
        <img src={getInvolvedIntroImage} alt="" style={{ width: 600 }} />
      </div>

      <div className="flex flex-col bg-lightBrown">
        <div className="text-center py-14 xl:px-72 px-14">
          <h1 className="text-2xl lg:text-4xl text-orange100">GET INVOLVED</h1>
          <p className="pt-4 leading-7 text-sm md:text-base">
            Do you believe that safety education should be freely available to
            anyone who needs it? Are you looking for a way to make a real
            difference and improve the lives of others? Join us in our mission
            to make the world a safer place for everyone.
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center px-14 lg:px-36 lg:gap-28 gap-8 lg:py-20">
          <img src={volunteerImage} alt="" style={{ width: 428 }} />
          <div className="text-center flex flex-col items-center lg:text-start">
            <h1 className="text-2xl lg:text-4xl text-orange100">VOLUNTEER</h1>
            <p className="pt-4 leading-7 text-sm md:text-base">
              Our terrific team of volunteers makes Must Be Me possible. By
              volunteering with us, you can help get crucial personal safety
              training to those who need it.
            </p>
            <p className="pt-4 leading-7 text-sm md:text-base">
              Are you a keen fundraiser? Do you want to help with classes or
              could you be our next incredible instructor? Whatever the time and
              talent you have available, there’s a role for you. Click the
              volunteer button to discover how you can make a difference.
            </p>
            <Button label="I want to volunteer" />
          </div>
        </div>

        <div className="flex flex-wrap-reverse lg:flex-nowrap justify-center mt-20 mb-20 lg:mb-14 lg:mt-0 px-14 lg:px-20 lg:gap-28 gap-8 lg:py-20">
          <div className="text-center flex flex-col items-center lg:text-start">
            <h1 className="text-darkBlue text-2xl lg:text-4xl">DONATE</h1>
            <p className="pt-4 leading-7 text-sm md:text-base">
              You can help us create a world where safety education is free,
              inclusive and effective.
            </p>
            <p className="pt-4 leading-7 text-sm md:text-base">
              Our teams are delivering accessible personal safety training to
              those who need it. Give now and help us improve lives by getting
              our expert training staff and courses to where they’re needed.
            </p>
            <Button label="Donate now" />
          </div>
          <img className="lg:-mt-20 w-[528px]" src={donateImage} alt="" />
        </div>
      </div>
    </div>
  )
}
