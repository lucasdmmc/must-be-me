import { Header } from '../components/Header'
import { NewsLetter } from '../components/NewsLetter'
import { Footer } from '../components/Footer'
import { BlueButton } from '../components/BlueButton'
import introContactImg from '../assets/images/intro-contact.png'

export const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center mt-20">
        <img src={introContactImg} alt="" style={{ width: 600 }} />
      </div>
      <div className="flex flex-col bg-orange-200 justify-center items-center pt-10 pb-32">
        <h1 className="text-5xl text-orange100">CONTACT US</h1>
        <p className="leading-7 pt-5 w-9/12 px-80 text-center pb-10">
          To learn more about our projects, upcoming classes or how you can get
          involved with Must Be Me, simply fill in the form below and our staff
          will get back to you as soon as possible.
        </p>
        <div className="bg-teal-400">
          <form action="" className="p-20 flex flex-col justify-between gap-8">
            <div className="flex flex-row gap-16">
              <input
                type="text"
                placeholder="Name"
                className="py-2 px-4 border-black"
              />
              <input
                type="text"
                placeholder="Surname"
                className="py-2 px-4 border-black"
              />
            </div>
            <input
              type="email"
              className="py-2 px-4 border-black"
              placeholder="Email"
            />
            <textarea
              name=""
              id=""
              className="py-2 px-4 border-black h-32"
              placeholder="Message"
            ></textarea>
            <div className="flex items-center">
              <BlueButton type="submit" label="SUBMIT" />
            </div>
          </form>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  )
}
