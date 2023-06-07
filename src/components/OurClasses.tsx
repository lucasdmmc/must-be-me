import ourClassesImage from '../assets/images/our-classes.png'

export const OurClasses = () => {
  return (
    <div className="flex justify-between items-center gap-10 pb-20 bg-zinc-100">
      <img src={ourClassesImage} alt="" />

      <div className="flex flex-col gap-4 px-10">
        <span className="text-4xl text-orange100 uppercase font-semibold">
          Our classes
        </span>
        <strong className="text-darkBlue text-justify">
          Just one class can teach you the skills you need to improve your
          confidence and safety awareness in day-to-day situations.
        </strong>
        <span className="text-darkBlue text-justify">
          Working both independently and hand-in-hand with community groups and
          partnerships, we provide single, one-hour classes teaching the crucial
          elements of personal safety and self-defence. You don’t need any
          previous experience to attend, and our classes are completely free.
        </span>
        <button className=" mt-4 flex items-center justify-center min-w-[290px] max-w-[290px] uppercase text-white cursor-pointer transition duration-300 hover:bg-blue-900 bg-darkBlue p-5 rounded-[27.5px]">
          Find out how we can help
        </button>
      </div>
    </div>
  )
}
