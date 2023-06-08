import { Header } from '../components/Header'
import { NewsLetter } from '../components/NewsLetter'
import { Footer } from '../components/Footer'
import { BlueButton } from '../components/BlueButton'
import OurClassesImage from '../assets/images/our-classes.png'
import MayraPicture from '../assets/images/Mayra-Must-Be-Me-Founder.jpg'
import WhoWeArePicture from '../assets/images/intro-whoweare.png'

export const WhoWeAre = () => {
  return (
    <div className="max-w-[1360px] mt-0 mb-10 mx-auto">
      <Header />
      <div className="flex justify-center">
        <img src={WhoWeArePicture} alt="" style={{ width: 600 }} />
      </div>
      <div className="flex flex-col bg-orange-200 justify-center items-center pt-10 pb-32">
        <h1 className="text-5xl text-orange100">WHO WE ARE</h1>
        <p className="leading-7 pt-5 text-darkBlue">
          Registered and based in the UK, we are dedicated to providing free
          safety education to anyone who wants it.
        </p>
        <p className="leading-7 pt-5 w-5/12 text-center text-darkBlue">
          Our projects have shown first-hand the impact that safety education
          has on participants, with students reporting increased wellbeing and a
          newfound sense of safety and empowerment
        </p>
      </div>
      <div className="flex flex-row bg-darkBlue justify-center items-center py-20 px-96 gap-16">
        <div className="flex flex-col text-white">
          <h1 className="text-4xl">OUR FOUNDER</h1>
          <p className="leading-7 pt-5">
            Since the age of eight, Must Be Me’s chair and founder Mayra has
            been volunteering with young people around the globe. Whilst working
            with communities across the world, in a wide range of countries with
            their own unique contexts and challenges, Mayra saw first-hand the
            impact that personal safety has on lives. Must Be Me was created to
            address this problem.Since the age of eight, Must Be Me’s chair and
            founder Mayra has been volunteering with young people around the
            globe. Whilst working with communities across the world, in a wide
            range of countries with their own unique contexts and challenges,
            Mayra saw first-hand the impact that personal safety has on lives.
            Must Be Me was created to address this problem.
          </p>
          <p className="leading-7 pt-10">
            Currently pursuing a master’s in Non-profit Management at Columbia
            University, Mayra speaks five languages and has undergone training
            in Self-Defence Instruction, Human Rights, Sexual Assault Support,
            Trauma First Aid and Explosive Ordinance Disposal.
          </p>
          <p className="leading-7 pt-10">
            <strong>
              Mayra’s ultimate goal is to make free, non-discriminatory safety
              education available to people around the world.
            </strong>
          </p>
        </div>
        <img
          src={MayraPicture}
          alt=""
          style={{ width: 365, border: '20px solid #fff' }}
        />
      </div>
      <div className="flex flex-col justify-center items-center py-20 ">
        <h1 className="pb-5 text-4xl text-orange100">OUR TEAM</h1>
        <p className="w-5/12 text-center">
          Our dedicated team are specialists in their respective fields with a
          shared passion for spreading the message of personal safety education.
          To ensure that we can help everyone who needs us, we also train
          skilled volunteers to deliver Must Be Me classes safely and
          effectively.
        </p>
      </div>
      <div className="h-20 bg-orange100"></div>
      <div className="flex justify-center items-center px-80 gap-16 pt-12 pb-28">
        <img src={OurClassesImage} alt="" />
        <div className="pr-36 pt-16">
          <h1 className="pb-5 text-4xl text-orange100">OUR CLASSES</h1>
          <strong className="leading-7">
            Just one class can teach you the skills you need to improve your
            confidence and safety awareness in day-to-day situations.
          </strong>
          <p className="pt-8 leading-7">
            Working both independently and hand-in-hand with community groups
            and partnerships, we provide single, one-hour classes teaching the
            crucial elements of personal safety and self-defence. You don’t need
            any previous experience to attend, and our classes are completely
            free.
          </p>
          <BlueButton label={'FIND OUT HOW WE CAN HELP'} />
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  )
}
