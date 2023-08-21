import introContactImg from '../assets/images/intro-contact.png'
import { Form } from './components/Form'

export const ContactUs = () => {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <img src={introContactImg} alt="" style={{ width: 600 }} />
      </div>
      <div className="flex flex-col px-4 bg-orange-200 justify-center items-center pt-10 pb-32">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl text-orange100">
          CONTACT US
        </h1>
        <p className="leading-7 text-sm md:text-base pt-5 text-center xl:px-72 pb-10 px-14">
          To learn more about our projects, upcoming classes or how you can get
          involved with Must Be Me, simply fill in the form below and our staff
          will get back to you as soon as possible.
        </p>
        <Form />
      </div>
    </div>
  )
}
