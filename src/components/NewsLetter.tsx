import iconNewsletterImage from '../assets/images/icon-newsletter.svg'
import { Button } from './Button'

export const NewsLetter = () => {
  return (
    <div className="bg-orange100 relative w-full pb-10">
      <img
        className="absolute -top-16 w-[120px] left-[35.5%] sm:left-[46%]"
        src={iconNewsletterImage}
        alt=""
      />
      <div className="flex flex-col items-center justify-center pt-20 sm:p-20">
        <strong className="text-xl sm:text-4xl text-white uppercase my-4">
          Keep up to date with our work
        </strong>
        <Button label="Sign up" />
        <span className="text-justify sm:text-center mt-10 px-5 sm:px-20 text-xs md:text-base leading-relaxed md:leading-8">
          Must Be Me will use the information you provide on this form to send
          you news about our mission, including ways you can support our cause.
          Your personal information will be kept private and securely held in
          compliance with GDPR as stated in our Privacy Policy. You can
          unsubscribe at any time using the link at the bottom of our emails.
        </span>
      </div>
    </div>
  )
}
