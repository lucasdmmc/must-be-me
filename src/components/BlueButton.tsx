export const BlueButton = ({ label }: { label: string}) => {
	return (
		<button 
		className="
		mt-8 flex items-center 
		justify-center min-w-[290px] max-w-[290px] 
		uppercase text-white cursor-pointer transition 
		duration-300 hover:bg-blue-900 bg-darkBlue p-5 rounded-[27.5px]">
			{label}
		</button>
	)
}