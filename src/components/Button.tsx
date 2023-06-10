import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="flex items-center justify-center min-w-[290px] max-w-[290px] 
      uppercase text-white text-sm md:text-base cursor-pointer transition 
      duration-300 hover:bg-blue-900 bg-darkBlue p-4 rounded-[27.5px] mt-4"
    >
      {label}
    </button>
  )
}
