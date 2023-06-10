import { Button } from '../components/Button'
import introContactImg from '../assets/images/intro-contact.png'

export const ContactUs = () => {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <img src={introContactImg} alt="" style={{ width: 600 }} />
      </div>
      <div className="flex flex-col bg-orange-200 justify-center items-center pt-10 pb-32">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl text-orange100">
          CONTACT US
        </h1>
        <p className="leading-7 text-sm md:text-base pt-5 text-center xl:px-72 pb-10 px-14">
          To learn more about our projects, upcoming classes or how you can get
          involved with Must Be Me, simply fill in the form below and our staff
          will get back to you as soon as possible.
        </p>
        <form
          action=""
          className="lg:p-20 p-10 w-full max-w-[1000px] bg-teal-400 flex flex-col rounded-lg justify-between gap-8"
        >
          <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-16">
            <input
              type="text"
              placeholder="Name"
              className="py-2 px-4 border-black w-full"
            />
            <input
              type="text"
              placeholder="Surname"
              className="py-2 px-4 border-black w-full"
            />
          </div>
          <input
            type="email"
            className="py-2 px-4 border-black w-full"
            placeholder="Email"
          />
          <textarea
            name=""
            id=""
            className="py-2 px-4 border-black h-32 resize-none w-full"
            placeholder="Message"
          ></textarea>
          <div className="flex items-center justify-center">
            <Button type="submit" label="Submit" />
          </div>
        </form>
      </div>
    </div>
  )
}
