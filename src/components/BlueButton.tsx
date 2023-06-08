type buttonType = 'button' | 'submit'

export const BlueButton = ({
  label,
  type = 'button',
}: {
  label: string
  type?: buttonType
}) => {
  return (
    <button
      type={type}
      className="
		mt-8 flex items-center 
		justify-center min-w-[290px] max-w-[290px] 
		uppercase text-white cursor-pointer transition 
		duration-300 hover:bg-blue-900 bg-darkBlue p-5 rounded-[27.5px]"
    >
      {label}
    </button>
  )
}
