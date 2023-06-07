
import whoAreWeImage from "../assets/images/whoarewe.jpeg"

export const WhoWeAre = () => {
  return (
    <div className="flex justify-between gap-4 bg-orange100 h-full py-10 rounded-lg mb-20 mt-10">
      <div className="flex flex-col gap-4 mt-14 px-20 min-w-[400px]">
        <strong className="text-5xl text-white">Who we are</strong>
        <span className="text-darkBlue text-lg text-start leading-6">
          Must Be Me is a UK-based organisation dedicated to breaking the
          silence <br /> around safety and delivering what we call ‘everyday
          empowerment’.
        </span>
        <span className="text-darkBlue text-lg text-start leading-6">
          Our mission is to equip anyone who wants it – regardless of gender,
          age, background or geography – with free safety-improvement training.
          Our work enhances wellbeing and safeguards lives and communities.
        </span>

        <button className=" mt-4 flex items-center justify-center min-w-[290px] max-w-[290px] uppercase text-white cursor-pointer transition duration-300 hover:bg-blue-900 bg-darkBlue p-5 rounded-[27.5px]">
          Meet our team
        </button>
      </div>
      <img
        className="object-cover w-[700px] relative h-[400px] mr-32 overflow-hidden flex items-center justify-center"
        src={whoAreWeImage}
        alt=""
      />
    </div>
  )
}
