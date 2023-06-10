import MayraPicture from '../assets/images/Mayra-Must-Be-Me-Founder.jpg'
import WhoWeArePicture from '../assets/images/intro-whoweare.png'
import { OurClasses } from '../components/OurClasses'

export const WhoWeAre = () => {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <img className="w-[660px]" src={WhoWeArePicture} alt="" />
      </div>
      <div className="flex flex-col bg-orange-200 justify-center items-center py-10 lg:py-14">
        <h1 className="text-2xl md:text-5xl text-orange100">WHO WE ARE</h1>
        <p className="leading-7 text-justify md:text-center text-sm md:text-base mt-5 text-darkBlue lg:px-72 px-5">
          Registered and based in the UK, we are dedicated to providing free
          safety education to anyone who wants it.
        </p>
        <p className="leading-7 text-justify md:text-center text-sm md:text-base mt-5 text-darkBlue lg:px-72 px-5">
          Our projects have shown first-hand the impact that safety education
          has on participants, with students reporting increased wellbeing and a
          newfound sense of safety and empowerment
        </p>
      </div>

      <div className="flex flex-wrap-reverse lg:flex-nowrap bg-darkBlue justify-center items-center py-20 px-10 gap-16">
        <div className="flex flex-col text-white">
          <h1 className="text-2xl text-center md:text-start md:text-4xl">
            OUR FOUNDER
          </h1>
          <p className="leading-7 mt-5 text-sm md:text-base text-center md:text-start">
            Since the age of eight, Must Be Me’s chair and founder Mayra has
            been volunteering with young people around the globe. Whilst working
            with communities across the world, in a wide range of countries with
            their own unique contexts and challenges, Mayra saw first-hand the
            impact that personal safety has on lives. Must Be Me was created to
            address this problem.
          </p>
          <p className="leading-7 mt-10 text-sm md:text-base text-center md:text-start">
            Currently pursuing a master’s in Non-profit Management at Columbia
            University, Mayra speaks five languages and has undergone training
            in Self-Defence Instruction, Human Rights, Sexual Assault Support,
            Trauma First Aid and Explosive Ordinance Disposal.
          </p>
          <strong className="leading-7 mt-10 text-sm md:text-base text-center md:text-start">
            Mayra’s ultimate goal is to make free, non-discriminatory safety
            education available to people around the world.
          </strong>
        </div>
        <img
          src={MayraPicture}
          alt=""
          className="w-[365px] border-[20px] border-white"
        />
      </div>

      <div className=" bg-zinc-100 flex flex-col gap-4 justify-center items-center my-10 rounded-lg px-10 md:py-20 py-10 lg:px-72">
        <h1 className="text-2xl md:text-4xl text-orange100">OUR TEAM</h1>
        <p className="text-center text-sm md:text-base leading-relaxed">
          Our dedicated team are specialists in their respective fields with a
          shared passion for spreading the message of personal safety education.
          To ensure that we can help everyone who needs us, we also train
          skilled volunteers to deliver Must Be Me classes safely and
          effectively.
        </p>
      </div>

      <OurClasses />
    </div>
  )
}
