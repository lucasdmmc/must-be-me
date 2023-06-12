interface HowWeDoProps {
  description: string
  image: string
}

export const HowWeDo = ({ description, image }: HowWeDoProps) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg text-sm py-5 px-5 w-[300px] h-[370px] bg-darkBlue">
      <img className="w-[100px]" src={image} alt="" />
      <p className="text-white text-center">{description}</p>
    </div>
  )
}
