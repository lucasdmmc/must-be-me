import { StarIcon } from '@heroicons/react/24/solid'

interface FeedbackProps {
  description: string
}

export const FeedbackCard = ({ description }: FeedbackProps) => {
  return (
    <div className="md:w-[300px] w-[150px] flex flex-col bg-white py-6 px-4 rounded-lg">
      <div className="flex justify-center gap-2">
        <StarIcon className="fill-yellow-400 md:w-7 md:h-7" />
        <StarIcon className="fill-yellow-400 md:w-7 md:h-7" />
        <StarIcon className="fill-yellow-400 md:w-7 md:h-7" />
        <StarIcon className="fill-yellow-400 md:w-7 md:h-7" />
        <StarIcon className="fill-yellow-400 md:w-7 md:h-7" />
      </div>
      <span className="text-zinc-500 md:text-lg text-sm text-center md:mt-5 mt-3">
        {description}
      </span>
    </div>
  )
}
