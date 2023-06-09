import introOurClasses from '../../assets/images/intro-ourclasses.png'
import ourClassesImg from '../../assets/images/our-classes.png'

import stepOne from '../../assets/images/step-one.png'
import stepPath from '../../assets/images/step-path.png'
import stepTwo from '../../assets/images/step-two.png'
import { Faqs } from '../../components/Faqs'

export const OurClasses = () => {
  return (
    <div className="w-full">
      <div className=" w-full flex flex-wrap lg:flex-nowrap justify-center md:justify-between items-center gap-4 mt-20 pb-8 md:border-b ">
        <div className="flex flex-col gap-2">
          <strong className="uppercase  text-center md:text-start text-3xl sm:text-5xl text-orange100 font-semibold leading-[48px]">
            Our Classes
          </strong>
          <span className="text-center sm:text-start text-lg sm:text-3xl sm:mt-4 text-darkBlue">
            What would better personal safety mean to you?
          </span>
        </div>
        <img
          className="w-[400px] mt-8 sm:mt-0 sm:w-[600px]"
          src={introOurClasses}
          alt=""
        />
      </div>

      <div className="bg-zinc-100 flex justify-center items-center p-10 md:p-24 my-10 rounded-lg">
        <span className="text-darkBlue md:text-center text-sm text-center md:text-xl">
          At Must Be Me, every class is individual because every attendee is
          individual. Delivery of the sessions is tailored to fit the
          demographics of the students on that day, ensuring that everyone can
          participate equally and no one is left behind.
        </span>
      </div>
      <div className="bg-orange100 rounded-lg flex flex-col justify-center items-center mb-10">
        <div className="xl:flex flex flex-col lg:flex-row items-center justify-center xl:text-start gap-12 px-10 xl:px-40 py-20 -mb-12">
          <img src={stepOne} alt="" />
          <div className="flex flex-col sm:items-center lg:items-start gap-2">
            <span className="text-2xl text-center font-semibold text-darkBlue">
              Step One
            </span>
            <p className="text-base md:text-xl text-justify leading-7">
              The first step in each class is to understand what safety means to
              each candidate individually. Perhaps it’s being able to plan a
              safe route home from work or knowing that, should you run into
              trouble, you have the skills to confidently remove yourself from
              the situation. Our skilled staff will help you to identify your
              safety needs, personalising your experience and allowing you to
              focus on the aspects of the class that will help you the most
            </p>
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center">
          <img
            className="flex justify-center w-[870px]"
            src={stepPath}
            alt=""
          />
        </div>
        <div className="xl:flex flex flex-col-reverse lg:flex-row items-center justify-center xl:text-start gap-12 px-10 xl:px-40 py-20 -mt-14">
          <div className="flex flex-col sm:items-center lg:items-start gap-2">
            <span className="text-2xl text-center font-semibold text-darkBlue">
              Step Two
            </span>
            <p className="text-base md:text-xl text-justify leading-7">
              As well as teaching you to understand and assess situations for
              safety, our training provides response skills. These include
              verbal and physical self-defence techniques that focus on escape
              and survival rather than causing harm to the assailant. It’s very
              important that these tools are respected and used only when
              necessary, in proportion to the threat, to ensure safety.
            </p>
          </div>
          <img src={stepTwo} alt="" />
        </div>
      </div>

      <div className="bg-zinc-100 flex justify-center items-center p-10 md:p-24">
        <p className="text-darkBlue md:text-center text-sm text-center md:text-xl">
          Must Be Me sessions are designed to include the most achievable
          techniques for all body types and levels of strength. You don’t need
          any previous experience of safety education or self-defence to attend,
          and everyone is welcome. If you have additional learning needs, please
          get in touch with us – we are very happy to discuss how we can work
          with you to make sure you get the most out of your session.
        </p>
      </div>
      <Faqs />

      <div className="flex flex-wrap sm:flex-nowrap -mt-10 mb-24 sm:mt-0 justify-between items-center gap-10 pb-20 bg-zinc-100">
        <div className="flex flex-col items-center sm:items-start gap-4 px-10">
          <span className="text-4xl text-orange100 uppercase font-semibold">
            Book a class
          </span>
          <span className=" leading-relaxed text-center sm:text-start">
            Ready to experience Must Be Me for yourself and improve your safety
            confidence? Use our handy online tool to book your free class today.
          </span>
          <button className=" mt-4 flex items-center justify-center min-w-[290px] max-w-[290px] uppercase text-white cursor-pointer transition duration-300 hover:bg-blue-900 bg-darkBlue p-5 rounded-[27.5px]">
            Book a class
          </button>
        </div>
        <img className="px-6 sm:px-0" src={ourClassesImg} alt="" />
      </div>
    </div>
  )
}
